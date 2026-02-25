require("dotenv").config();
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

async function getAIRecommendations(places, budget, interests) {

  const prompt = `
  Suggest a short personalized travel recommendation.

  Budget: ₹${budget}
  Interests: ${interests.join(", ")}

  Places:
  ${places.map(p => `${p.city} - ₹${p.avg_cost}`).join("\n")}
  `;

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }]
  });

  return completion.choices[0].message.content;
}

module.exports = { getAIRecommendations };