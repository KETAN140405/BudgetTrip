const mongoose = require("mongoose");

const attractionSchema = new mongoose.Schema({

  citySlug:    { type: String, required: true }, // links to city e.g. "goa"
  cityName:    { type: String },
  state: { type: String },                 // e.g. "Goa"
  name:        { type: String, required: true },
  description: { type: String },
  image:       { type: String },
  lat:         { type: Number },
  lng:         { type: Number }
}, { timestamps: true });

module.exports = mongoose.model("Attraction", attractionSchema);