require("dotenv").config();
const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const db = require("./config/db");

const connectMongo = require("./config/mongo");
const City = require("./models/city");
const cityRoutes = require("./routes/cityRoutes");

const app = express();
connectMongo();

// ===== MIDDLEWARE =

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: "supersecretkey",
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}));

app.use("/api", cityRoutes);
app.use(express.static(path.join(__dirname, "public")));

// ===== STATIC ======

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/place/:slug", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "place.html"));
});

app.get('/itinerary/:slug', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'itineary.html'));
});

app.get("/api/place/:slug", async (req, res) => {
  const place = await City.findOne({ slug: req.params.slug });

  if (!place) return res.status(404).json({ error: "Not found" });

  res.json(place);
});

// ======= USER SESSION =========

app.get("/user", (req, res) => {
  if (req.session.user) {
    res.json({ loggedIn: true, user: req.session.user });
  } else {
    res.json({ loggedIn: false });
  }
});

// ================= SIGNUP =================

app.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password)
    return res.status(400).send("All fields required");

  if (password.length < 8)
    return res.status(400).send("Password too short");

  const hashed = await bcrypt.hash(password, 10);

  db.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
    [name, email, hashed],
    (err) => {
      if (err) return res.status(500).send("Signup failed");
      res.redirect("/");
    }
  );
});

// ================= LOGIN =================

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email=?", [email], async (err, result) => {
    if (result.length === 0)
      return res.status(401).send("No account found");

    const isMatch = await bcrypt.compare(password, result[0].password);

    if (!isMatch)
      return res.status(401).send("Wrong password");

    req.session.user = {
      id: result[0].id,
      name: result[0].username,
      email: result[0].email
    };

    res.redirect("/");
  });
});



// ================= LOGOUT =================

app.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
});




app.patch("/api/user/profile", async (req, res) => {
  if (!req.session || !req.session.user)
    return res.status(401).send("Not logged in");

  const { name, email, password } = req.body;
  const userId = req.session.user.id;

  if (!name || !email)
    return res.status(400).send("Name and email are required");

  try {
    if (password) {
      if (password.length < 8)
        return res.status(400).send("Password must be at least 8 characters");

      const hashed = await bcrypt.hash(password, 10);
      db.query(
        "UPDATE users SET username=?, email=?, password=? WHERE id=?",
        [name, email, hashed, userId],
        (err) => {
          if (err?.code === "ER_DUP_ENTRY")
            return res.status(409).send("Email already in use");
          if (err) return res.status(500).send("Update failed");
          req.session.user.name  = name;
          req.session.user.email = email;
          res.json({ success: true, user: req.session.user });
        }
      );
    } else {
      db.query(
        "UPDATE users SET username=?, email=? WHERE id=?",
        [name, email, userId],
        (err) => {
          if (err?.code === "ER_DUP_ENTRY")
            return res.status(409).send("Email already in use");
          if (err) return res.status(500).send("Update failed");
          req.session.user.name  = name;
          req.session.user.email = email;
          res.json({ success: true, user: req.session.user });
        }
      );
    }
  } catch(err) {
    console.error("Profile update error:", err);
    res.status(500).send("Server error");
  }
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




const Itinerary = require('./models/Itinerary'); // or City, whatever model has itineariescitySchema

// GET all itineraries (for slider)
app.get('/api/itineraries', async (req, res) => {
  try {
    const items = await Itinerary.find({});
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single itinerary by slug (for detail page)
app.get('/api/itinerary/:slug', async (req, res) => {
  try {
    const item = await Itinerary.findOne({ slug: req.params.slug });
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});



const Attraction = require('./models/Attraction');

// GET all attractions for a city by slug
app.get('/api/attractions/:citySlug', async (req, res) => {
  try {
    const attractions = await Attraction.find({ 
      citySlug: req.params.citySlug 
    });
    res.json(attractions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


// Serve attraction info page
app.get('/attraction/:id', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'attraction.html'));
});

// API — get single attraction by ID
app.get('/api/attraction/:id', async (req, res) => {
  try {
    const attraction = await Attraction.findById(req.params.id);
    if (!attraction) return res.status(404).json({ error: 'Not found' });
    res.json(attraction);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


app.get('/api/attractions', async (req, res) => {
  const data = await Attraction.find(); // your collection
  res.json(data);
});




// ================= START =================

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});