const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  title:       String,
  slug:        { type: String, unique: true },
  category:    String,
  img:         String,
  desc:        String,
  days:        Number,
  season:      String,
  difficulty:  String,
  // rating:      Number,
  price:       String,
  description: String,
  itinerary: [
    {
      title: String,
      desc:  String
    }
  ],
  highlights: [String]
}, { timestamps: true });

module.exports = mongoose.model("Itinerary", itinerarySchema);