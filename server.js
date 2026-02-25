require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const db = require("./db");
const OpenAI = require("openai");
const fs = require("fs");

// ── Load city data ────────────────────────────────────────────────────────────
let cities = [];
try {
  cities = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
  console.log(`Cities loaded: ${cities.length}`);
} catch (err) {
  console.error("❌ Failed to load data.json:", err.message);
  // Server still starts; /api/ai will return empty results rather than crashing
}

const app = express();

// ── OpenAI client ─────────────────────────────────────────────────────────────
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// ── Middleware ────────────────────────────────────────────────────────────────
app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "fallback-dev-secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      // In production set secure:true and serve over HTTPS
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000, // 1 week
    },
  })
);

// ── Static routes ─────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/style.css", express.static(path.join(__dirname, "style.css")));

// ── Auth: current user ────────────────────────────────────────────────────────
app.get("/user", (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
});

// ── Auth: signup ──────────────────────────────────────────────────────────────
app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }
  if (password.length < 8) {
    return res.status(400).send("Password must be at least 8 characters");
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [name, email, hashedPassword], (err) => {
      if (err) {
        // MySQL duplicate entry error code
        if (err.code === "ER_DUP_ENTRY") {
          return res.status(409).send("An account with that email already exists");
        }
        console.error("Signup DB error:", err);
        return res.status(500).send("Signup failed. Please try again.");
      }
      res.redirect("/");
    });
  } catch (err) {
    console.error("Signup error:", err);
    res.status(500).send("Server error during signup");
  }
});

// ── Auth: login ───────────────────────────────────────────────────────────────
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send("Email and password are required");
  }

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], async (err, result) => {
    if (err) {
      console.error("Login DB error:", err);
      return res.status(500).send("Server error during login");
    }
    if (result.length === 0) {
      return res.status(401).send("No account found with that email");
    }

    try {
      const isMatch = await bcrypt.compare(password, result[0].password);
      if (isMatch) {
        req.session.user = {
          id: result[0].id,
          name: result[0].username,
          email: result[0].email,
        };
        res.redirect("/dashboard");
      } else {
        res.status(401).send("Incorrect password");
      }
    } catch (err) {
      console.error("bcrypt error:", err);
      res.status(500).send("Server error during login");
    }
  });
});

// ── Dashboard ─────────────────────────────────────────────────────────────────
app.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.redirect("/");
  res.sendFile(path.join(__dirname, "dashboard.html"));
});

// ── Logout ────────────────────────────────────────────────────────────────────
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) console.error("Session destroy error:", err);
    res.redirect("/");
  });
});

// ── Place page (SSR shell) ────────────────────────────────────────────────────
app.get("/place/:slug", (req, res) => {
  const place = cities.find(c => c.slug === req.params.slug);
  if (!place) return res.status(404).send("Place not found");
  res.sendFile(path.join(__dirname, "public", "place.html"));
});

// ── Place API ─────────────────────────────────────────────────────────────────
app.get("/api/place/:slug", (req, res) => {
  const place = cities.find(c => c.slug === req.params.slug);
  if (!place) return res.status(404).json({ error: "Place not found" });
  res.json(place);
});

// ── OpenAI text recommendation ────────────────────────────────────────────────
app.post("/api/ai-recommend", async (req, res) => {
  const { budget } = req.body;
  if (!budget) return res.status(400).json({ error: "Budget is required" });

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are a travel expert for India. Recommend 3 destinations based on budget.",
        },
        {
          role: "user",
          content: `My daily budget is ₹${budget}. Suggest best Indian destinations with short reason and approx cost.`,
        },
      ],
    });
    res.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error("OpenAI error:", error.message);
    res.status(500).json({ error: "AI recommendation failed" });
  }
});

// ── Main AI filter + scoring endpoint ────────────────────────────────────────
app.post("/api/ai", (req, res) => {
  try {
    const { budget, type, minRating, state, search } = req.body;

    if (!budget) {
      return res.status(400).json({ error: "Budget is required" });
    }

    const numericBudget = parseInt(budget, 10);
    if (isNaN(numericBudget) || numericBudget <= 0) {
      return res.status(400).json({ error: "Budget must be a positive number" });
    }

    const filtered = cities.filter(city => {
      // FIX #4: Changed from 1.5x (50% over budget) to 1.1x (10% tolerance)
      // This ensures budget filtering is actually meaningful
      const budgetMatch = city.avgCostPerDay <= numericBudget * 1.1;

      const typeMatch = !type || city.type === type;

      const ratingMatch = !minRating || city.rating >= parseFloat(minRating);

      const stateMatch = !state || city.state === state;

      const searchMatch =
        !search ||
        city.name.toLowerCase().includes(search.toLowerCase()) ||
        (city.city && city.city.toLowerCase().includes(search.toLowerCase()));

      return budgetMatch && typeMatch && ratingMatch && stateMatch && searchMatch;
    });

    // Score remaining cities by how close they are to the budget + their rating
    const scored = filtered.map(city => {
      const budgetDiff = Math.abs(city.avgCostPerDay - numericBudget);
      // Normalise: 0 diff = 100, cost equal to budget = 100, higher diff = lower score
      const budgetScore = Math.max(0, 100 - (budgetDiff / numericBudget) * 100);
      const ratingScore = city.rating * 10; // rating out of 5 → 0–50 range

      const finalScore = budgetScore * 0.6 + ratingScore * 0.4;

      return { ...city, aiScore: Math.round(finalScore) };
    });

    const sorted = scored.sort((a, b) => b.aiScore - a.aiScore);

    return res.json(sorted.slice(0, 10));
  } catch (err) {
    console.error("AI ERROR:", err);
    return res.status(500).json({ error: "AI server error" });
  }
});

// ── 404 fallback ──────────────────────────────────────────────────────────────
app.use((req, res) => {
  res.status(404).send("Page not found");
});

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
