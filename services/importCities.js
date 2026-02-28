const axios = require("axios");
const City = require("../models/City");

const importIndianCities = async () => {
  let allCities = [];

  for (let offset = 0; offset < 200; offset += 10) {
    const res = await axios.get(
      "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
      {
        params: {
          countryIds: "IN",
          limit: 10,
          offset: offset,
          minPopulation: 200000
        },
        headers: {
          "X-RapidAPI-Key": process.env.GEODB_API_KEY,
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com"
        }
      }
    );

    allCities.push(...res.data.data);
  }

  const formatted = allCities.map(c => ({
    name: c.city,
    slug: c.city.toLowerCase().replace(/\s/g, "-"),
    state: c.region,
    type: "general",
    avgCostPerDay: Math.floor(Math.random() * 3000) + 2000,
    rating: (Math.random() * 2 + 3).toFixed(1),
    lat: c.latitude,
    lng: c.longitude
  }));

  await City.insertMany(formatted);

  return formatted.length;
};

module.exports = importIndianCities;