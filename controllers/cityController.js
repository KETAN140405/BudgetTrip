const City = require("../models/city");

exports.getCities = async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

exports.generateCities = async (req, res) => {
  try {
    const sampleCities = [
      {
        name: "Jaipur",
        state: "Rajasthan",
        description: "Pink City famous for forts",
        image: "https://source.unsplash.com/400x300/?jaipur",
        budgetCategory: "medium"
      },
      {
        name: "Goa",
        state: "Goa",
        description: "Beach destination",
        image: "https://source.unsplash.com/400x300/?goa",
        budgetCategory: "high"
      },
      {
        name: "Varanasi",
        state: "Uttar Pradesh",
        description: "Spiritual city of India",
        image: "https://source.unsplash.com/400x300/?varanasi",
        budgetCategory: "low"
      }
    ];

    await City.insertMany(sampleCities);
    res.json({ message: "Cities Generated Successfully" });

  } catch (error) {
    res.status(500).json({ message: "Error generating cities" });
  }
};