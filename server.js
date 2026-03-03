require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const db = require("./config/db");
const OpenAI = require("openai");

const connectMongo = require("./config/mongo");
const City = require("./models/city");
const cityRoutes = require("./routes/cityRoutes");

const app = express();
connectMongo(); 



// ── Middleware ─────────────────────────────

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || "supersecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}));
app.use("/api", cityRoutes);

app.use(express.static(path.join(__dirname, "public")));




app.get("/place/:slug", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "place.html"));
});

app.get("/api/place/:slug", async (req, res) => {
  const place = await City.findOne({ slug: req.params.slug });

  if (!place) return res.status(404).json({ error: "Not found" });

  res.json(place);
});



// ── Static routes ─────────────────────────────────────────────────────────────
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.use("/style.css", express.static(path.join(__dirname, "style.css")));

// ── Auth: current user ────────────────────────────────────────────────────────
app.get("/user", (req, res) => {
  if (req.session && req.session.user) {
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




app.get("/api/cities", async (req, res) => {
  try {
    const { state } = req.query;

    let filter = {};

    if (state) {
      filter.state = new RegExp("^" + state + "$", "i"); 
      // case insensitive exact match
    }

    const cities = await City.find(filter);

    res.json(cities);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ── Start ─────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
