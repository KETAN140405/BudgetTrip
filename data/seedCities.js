const mongoose = require("mongoose");
require("dotenv").config();

const City = require("../models/city");

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo Connected for Seeding"));

const cities = [
  {
    name: "Goa",
    slug: "goa",
    state: "Goa",
    type: "beach",
    avgCostPerDay: 2500,
    rating: 4.5,
    description: "Famous for beaches, nightlife and Portuguese culture.",
    mainImage: "https://images.unsplash.com/photo-1587922546307-776227941871",
    attractions: [
      {
        name: "Baga Beach",
        description: "Popular beach with nightlife.",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07"
      },
      {
        name: "Fort Aguada",
        description: "17th-century Portuguese fort.",
        image: "https://images.unsplash.com/photo-1601897009074-6f3f4bb7a8a5"
      }
    ]
  },
  {
    name: "Manali",
    slug: "manali",
    state: "Himachal Pradesh",
    type: "hill",
    avgCostPerDay: 1800,
    rating: 4.6,
    description: "Snow mountains and adventure sports destination.",
    mainImage: "https://images.unsplash.com/photo-1605648916319-cc7c41e4b0d7",
    attractions: [
      {
        name: "Solang Valley",
        description: "Adventure activities and snow views.",
        image: "https://images.unsplash.com/photo-1604496464355-d8b89d4c01b0"
      }
    ]
  },
  {
    name: "Jaipur",
    slug: "jaipur",
    state: "Rajasthan",
    type: "heritage",
    avgCostPerDay: 2000,
    rating: 4.4,
    description: "The Pink City of India.",
    mainImage: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
    attractions: [
      {
        name: "Hawa Mahal",
        description: "Iconic pink palace.",
        image: "https://images.unsplash.com/photo-1592557867528-e18d1dbba1a6"
      }
    ]
  }
];

async function seedData() {
  await City.deleteMany(); // clear old data
  await City.insertMany(cities);
  console.log("✅ Sample Cities Inserted");
  process.exit();
}

seedData();