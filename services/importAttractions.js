const axios = require("axios");
const City = require("../models/City");

const addAttractionsToCities = async () => {
  const cities = await City.find();

  for (let city of cities) {
    const res = await axios.get(
      `https://api.opentripmap.com/0.1/en/places/radius`,
      {
        params: {
          radius: 10000,
          lon: city.lng,
          lat: city.lat,
          limit: 5,
          apikey: process.env.OPENTRIP_API_KEY
        }
      }
    );

    const attractions = res.data.features;

    const formattedAttractions = [];

    for (let place of attractions) {
      const xid = place.properties.xid;

      const detail = await axios.get(
        `https://api.opentripmap.com/0.1/en/places/xid/${xid}`,
        {
          params: { apikey: process.env.OPENTRIP_API_KEY }
        }
      );

      formattedAttractions.push({
        name: detail.data.name,
        description: detail.data.wikipedia_extracts?.text || "",
        image: detail.data.preview?.source || "",
        rating: detail.data.rate || 0,
        lat: detail.data.point.lat,
        lng: detail.data.point.lon
      });
    }

    city.attractions = formattedAttractions;
    await city.save();
  }

  return "Attractions Added";
};

module.exports = addAttractionsToCities;