const express = require("express");
const router = express.Router();
const City = require("../models/city");

// Generate cities based on budget
router.post("/generate", async (req, res) => {
  try {
    const { budget } = req.body;

    const cities = await City.find({
      avgCostPerDay: { $lte: budget }
    }).limit(6);

    res.json(cities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get single city by slug
router.get("/city/:slug", async (req, res) => {
  try {
    const city = await City.findOne({ slug: req.params.slug });
    res.json(city);
  } catch (err) {
    res.status(500).json({ message: "Error fetching city" });
  }
});

module.exports = router;