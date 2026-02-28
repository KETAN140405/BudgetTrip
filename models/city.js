const mongoose = require("mongoose");

const attractionSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String
});

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, unique: true },
  state: String,
  type: String, // beach, hill, heritage, etc
  avgCostPerDay: Number,
  rating: Number,
  description: String,
  mainImage: String,
  attractions: [attractionSchema]
});

module.exports = mongoose.model("City", citySchema);