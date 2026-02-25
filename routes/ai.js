const express = require("express");
const router = express.Router();
const { getAIRecommendations } = require("../services/openaiService");
const { rankDestinations } = require("../services/rankingEngine");
const db = require("../db");

router.post("/recommend", async (req, res) => {
  const { budget, interests, days } = req.body;

  try {
    // 1️⃣ Get all Indian places from DB
    db.query("SELECT * FROM destinations", async (err, places) => {
      if (err) return res.status(500).json({ error: "DB error" });

      // 2️⃣ Smart ranking algorithm
      const ranked = rankDestinations(places, budget, interests);

      // 3️⃣ Optional: OpenAI personalization layer
      const aiText = await getAIRecommendations(ranked.slice(0, 5), budget, interests);

      res.json({
        topPlaces: ranked.slice(0, 6),
        aiSummary: aiText
      });
    });

  } catch (error) {
    res.status(500).json({ error: "AI engine failed" });
  }
});
app.post("/api/ai", (req, res) => {
  const { budget, type } = req.body;

  const results = cities.filter(city => {
    return (
      city.avgCostPerDay <= budget &&
      (!type || city.type === type)
    );
  });

  res.json(results.slice(0, 12));
});
module.exports = router;