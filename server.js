// const express = require("express");
// const path = require("path");
// const bcrypt = require("bcryptjs");
// const db = require("./db");
// const app = express();

// app.use(express.static(__dirname));
// app.use("/style.css", express.static(path.join(__dirname, "style.css")));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "index.html"));
// });

// app.post("/signup", async (req, res) => {
//   const { name, email, password } = req.body;

//   const hashedPassword = await bcrypt.hash(password, 10);

//   const sql =
//     "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

//   db.query(sql, [name, email, hashedPassword], (err) => {
//     if (err) {
//       return res.send("User already exists or error occurred");
//     }
//     res.redirect("index.html");
//   });
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;

//   const sql = "SELECT * FROM users WHERE email = ?";

//   db.query(sql, [email], async (err, result) => {
//     if (err || result.length === 0) {
//       return res.send("User not found");
//     }

//     const isMatch = await bcrypt.compare(password, result[0].password);

//     if (isMatch) {
//       res.send("Login successful ✅");
//     } else {
//       res.send("Invalid password ❌");
//     }
//   });
// });

// app.listen(3000, () => {
//   console.log("Server running on http://localhost:3000");
// });





require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const db = require("./db");
const OpenAI = require("openai");

const app = express();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.use(express.static(__dirname));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/user", (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashedPassword], (err) => {
    if (err) {
      return res.send("User already exists");
    }
    res.redirect("/");
  });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";

  db.query(sql, [email], async (err, result) => {
    if (err || result.length === 0) {
      return res.send("User not found");
    }

    const isMatch = await bcrypt.compare(password, result[0].password);

    if (isMatch) {
      req.session.user = {
        id: result[0].id,
        name: result[0].username,
        email: result[0].email,
      };
      res.redirect("/dashboard");
    } else {
      res.send("Invalid password");
    }
  });
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) return res.redirect("/");
  res.sendFile(path.join(__dirname, "dashboard.html"));
});

app.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

/* 🔥 OpenAI AI Recommendation Route */
app.post("/api/ai-recommend", async (req, res) => {
  const { budget } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a travel expert for India. Recommend 3 destinations based on budget.",
        },
        {
          role: "user",
          content: `My daily budget is ₹${budget}. Suggest best Indian destinations with short reason and approx cost.`,
        },
      ],
    });

    res.json({ result: completion.choices[0].message.content });
  } catch (error) {
    res.status(500).json({ error: "AI failed" });
  }
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});