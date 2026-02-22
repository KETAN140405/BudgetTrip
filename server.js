const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const db = require("./db");
const app = express();

app.use(express.static(__dirname));
app.use("/style.css", express.static(path.join(__dirname, "style.css")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const sql =
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";

  db.query(sql, [name, email, hashedPassword], (err) => {
    if (err) {
      return res.send("User already exists or error occurred");
    }
    res.redirect("index.html");
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
      res.send("Login successful ✅");
    } else {
      res.send("Invalid password ❌");
    }
  });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});