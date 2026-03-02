const express = require("express");
const router = express.Router();
const City = require("../models/city");


// 🔥 Trending + Search
router.get("/trending", async (req, res) => {
  const search = req.query.search || "";

  const cities = await City.find({
    $or: [
   { name: { $regex: search, $options: "i" }},
    { state: { $regex: search, $options: "i" } }
    ]
  }).limit(12);

  res.json(cities);
});

// // // 🔥 Budget Generate
router.post("/generate", async (req, res) => {
  const { budget } = req.body;

  const cities = await City.find({
     
    avgCostPerDay: { $lte: budget }
  }).limit(6);

  res.json(cities);
});
module.exports = router;


