const express = require("express");
const router = express.Router();
const City = require("../models/city");

// 🔥 Trending + Search
router.get("/trending", async (req, res) => {
  const search = req.query.search || "";

  const cities = await City.find({
    name: { $regex: search, $options: "i" }
  }).limit(12);

  res.json(cities);
});

// // 🔥 Budget Generate
router.post("/generate", async (req, res) => {
  const { budget } = req.body;

  const cities = await City.find({
    avgCostPerDay: { $lte: budget }
  }).limit(6);

  res.json(cities);
});



// 🔎 SEARCH + FILTER
// router.get("/search", async (req, res) => {
//   try {
//     const { q, budget } = req.query;

//     let filter = {};

//     // Search by name
//     if (q) {
//       filter.name = { $regex: q, $options: "i" };
//     }

//     // Budget filter
//     if (budget === "low") {
//       filter.avgCostPerDay = { $lte: 2000 };
//     } else if (budget === "medium") {
//       filter.avgCostPerDay = { $gt: 2000, $lte: 5000 };
//     } else if (budget === "luxury") {
//       filter.avgCostPerDay = { $gt: 5000 };
//     }

//     const cities = await City.find(filter).limit(12);

//     res.json(cities);
//   } catch (err) {
//     console.log(err);
//     res.status(500).json({ error: "Search failed" });
//   }
// });

module.exports = router;