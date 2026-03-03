// const mongoose = require("mongoose");

// const attractionSchema = new mongoose.Schema({
//   name: String,
//   description: String,
//   image: String

// });

// const citySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   slug: { type: String, unique: true },
//   state: String,
//   type: String,
//   avgCostPerDay: Number,
//   rating: Number,
//   description: String,
//   information: {
//   type: String,
//   required: false
// },
//   mainImage: String,
//   attractions: [attractionSchema]
 
// });


// module.exports = mongoose.model("City", citySchema);
const mongoose = require("mongoose");

const attractionSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  lat: Number,
  lng: Number
});

const hotelSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  pricePerNight: Number,
  rating: Number,
  stars: { type: Number, min: 1, max: 5 },
  link: String,         // booking link (e.g. MakeMyTrip, Booking.com)
  lat: Number,
  lng: Number
});

const thingToDoSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  duration: String,     
  category: String,     
  price: Number         
});

const nearbyPlaceSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  distanceKm: Number,
  slug: String,         // for linking to that place's detail page
  lat: Number,
  lng: Number
});

const reviewSchema = new mongoose.Schema({
  author: String,
  rating: { type: Number, min: 1, max: 5 },
  comment: String,
  date: { type: Date, default: Date.now }
});

const citySchema = new mongoose.Schema({
  name:          { type: String, required: true },
  slug:          { type: String, unique: true },
  state:         String,
  type:          String,
  avgCostPerDay: Number,
  rating:        Number,
  description:   String,
  information:   { type: String, required: false },

  // Quick facts banner
  bestTimeToVisit: String,  
  weather:         String,   
  language:        String,   
  currency:        String,   

  // Images
  mainImage: String,
  images:    [String],

  // Coordinates (required for map pins)
  lat: Number,
  lng: Number,

  // New sections
  attractions:  [attractionSchema],
  hotels:       [hotelSchema],
  thingsToDo:   [thingToDoSchema],
  nearbyPlaces: [nearbyPlaceSchema],
  reviews:      [reviewSchema]
});

module.exports = mongoose.model("City", citySchema);