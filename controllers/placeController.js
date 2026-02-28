const Place = require("../models/Place");

exports.getPlaces = async (req, res) => {
  const places = await Place.find();
  res.json(places);
};

exports.getPlaceBySlug = async (req, res) => {
  const place = await Place.findOne({ slug: req.params.slug });
  if (!place) return res.status(404).json({ message: "Not found" });
  res.json(place);
};

exports.createPlace = async (req, res) => {
  const newPlace = new Place(req.body);
  await newPlace.save();
  res.json(newPlace);
};