require('dotenv').config();
const mongoose = require('mongoose');
const Itinerary = require('./models/Itinerary');

const data = [
  {
    title: "Goa",
    slug: "goa",
    category: "Beach Escape",
    img: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=900",
    desc: "Sun-soaked shores and vibrant nights",
    days: 5,
    season: "Nov – Feb",
    difficulty: "Easy",
    rating: 4.8,
    price: "₹18,500",
    description: "Goa is where golden sands meet turquoise waters. Five days across North Goa beaches, Portuguese heritage, and the lush Western Ghats.",
    itinerary: [
      { title: "Arrival & Calangute Beach", desc: "Check in, stroll Calangute, sunset at Baga beach." },
      { title: "Fort Aguada & Anjuna Market", desc: "Historic Portuguese fort, then Anjuna flea market." },
      { title: "Dudhsagar Waterfalls", desc: "Full-day jungle trek to the four-tiered Dudhsagar falls." },
      { title: "Panjim & Old Goa", desc: "Fontainhas heritage walk, Basilica of Bom Jesus, spice plantation." },
      { title: "Palolem & Departure", desc: "Crescent beach morning, seafood lunch, evening departure." }
    ],
    highlights: ["🏖️ Calangute Beach", "🏰 Fort Aguada", "💧 Dudhsagar Falls", "🍽️ Seafood trail", "🎉 Anjuna Market"]
  },
  {
    title: "Jaipur",
    slug: "jaipur",
    category: "Royal Heritage",
    img: "https://img.freepik.com/premium-photo/hawa-mahal-palace-jaipur_78361-4447.jpg",
    desc: "The Pink City of Rajasthan",
    days: 6,
    season: "Oct – Mar",
    difficulty: "Moderate",
    rating: 4.9,
    price: "₹22,800",
    description: "Jaipur dazzles in terracotta pink with extraordinary palaces, bustling bazaars, and living craft traditions.",
    itinerary: [
      { title: "Arrival & Johari Bazaar", desc: "Heritage haveli check-in, gem markets, rooftop dinner." },
      { title: "Amber Fort", desc: "Elephant ride up the fort, Sheesh Mahal, light & sound show." },
      { title: "City Palace & Jantar Mantar", desc: "Royal museum, UNESCO observatory, Hawa Mahal at golden hour." },
      { title: "Nahargarh Fort", desc: "Panoramic hilltop views, blue pottery workshops in Sanganer." },
      { title: "Jaigarh Fort & Stepwells", desc: "World's largest cannon, Panna Meena stepwell photography." },
      { title: "Markets & Departure", desc: "Block-print fabric shopping, farewell thali lunch." }
    ],
    highlights: ["🏰 Amber Fort", "🔭 Jantar Mantar", "👑 City Palace", "🐘 Elephant rides", "💎 Johari Bazaar"]
  },
  {
    title: "Shimla",
    slug: "shimla",
    category: "Mountain Retreat",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900",
    desc: "Queen of the Himalayan Hills",
    days: 5,
    season: "Mar – Jun, Oct – Dec",
    difficulty: "Easy",
    rating: 4.7,
    price: "₹16,500",
    description: "Shimla is colonial nostalgia wrapped in pine forests. The toy train, crisp mountain air, and Victorian Mall Road.",
    itinerary: [
      { title: "Toy Train & Arrival", desc: "UNESCO Kalka-Shimla railway through 102 tunnels." },
      { title: "The Ridge & Mall Road", desc: "Morning mist walk, Gaiety Theatre, café-hopping." },
      { title: "Kufri & Jakhu Temple", desc: "Yak rides in snow, hilltop temple trek through monkey forest." },
      { title: "Naldehra & Chail", desc: "Cedar forests, world's highest cricket ground, Chail Palace." },
      { title: "Prospect Hill & Departure", desc: "Sunrise hike, local siddu breakfast, descent by road." }
    ],
    highlights: ["🚂 UNESCO Toy Train", "🏔️ Kufri Snow", "🌲 Jakhu Temple", "🌅 Prospect Hill Sunrise"]
  },
  {
    title: "Munnar",
    slug: "munnar",
    category: "Tea Country",
    img: "https://images.unsplash.com/photo-1600256697461-ede50f3bf2c7?w=900",
    desc: "Rolling tea gardens of Kerala",
    days: 4,
    season: "Sep – May",
    difficulty: "Easy",
    rating: 4.8,
    price: "₹15,900",
    description: "Emerald tea gardens draped over the Western Ghats, mist every morning, fresh-plucked tea in the air.",
    itinerary: [
      { title: "Arrival & Tea Museum", desc: "KDHP Tea Museum, colonial history of Munnar estates." },
      { title: "Eravikulam National Park", desc: "Nilgiri Tahr wildlife walk, Rajamala peak views." },
      { title: "Mattupetty Dam & Echo Point", desc: "Boat ride on the reservoir, shikara, picnic." },
      { title: "Top Station & Departure", desc: "Pre-dawn sunrise drive, fresh tea shopping, return home." }
    ],
    highlights: ["🍵 Tea Garden Walks", "🦌 Nilgiri Tahr", "⛵ Mattupetty Boating", "🌄 Top Station Sunrise"]
  },
  {
    title: "Varanasi",
    slug: "varanasi",
    category: "Spiritual Journey",
    img: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=900",
    desc: "The eternal city on the Ganges",
    days: 4,
    season: "Oct – Mar",
    difficulty: "Moderate",
    rating: 4.9,
    price: "₹13,500",
    description: "The world's oldest city — every ghat, stone, and flickering lamp carries millennia of devotion.",
    itinerary: [
      { title: "Pre-Dawn Boat Ride", desc: "Row along the ghats at sunrise, witness 3,000-year-old rituals." },
      { title: "Kashi Vishwanath & Lanes", desc: "Golden temple visit, narrow galis, pan shops." },
      { title: "Sarnath", desc: "Where Buddha gave his first sermon. Dhamek Stupa at dawn." },
      { title: "Ganga Aarti & Departure", desc: "Dashashwamedh ghat fire ceremony, overnight train home." }
    ],
    highlights: ["🪔 Ganga Aarti", "🚣 Dawn Boat Ride", "🛕 Kashi Vishwanath", "☸️ Sarnath"]
  },
  {
    title: "Mumbai",
    slug: "mumbai",
    category: "City Immersion",
    img: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=900",
    desc: "The city that never sleeps",
    days: 4,
    season: "Oct – Mar",
    difficulty: "Easy",
    rating: 4.6,
    price: "₹14,200",
    description: "Art Deco boulevards, legendary street food, Bollywood glamour, and the endless Arabian Sea breeze.",
    itinerary: [
      { title: "Gateway of India & Colaba", desc: "Iconic arch, Elephanta Caves ferry, Colaba Causeway walk." },
      { title: "CST & Dhobi Ghat", desc: "UNESCO railway station, open-air laundry, Dadar flower market." },
      { title: "Bandra & Juhu", desc: "Street art lanes, beachside café lunch, Juhu beach at dusk." },
      { title: "Marine Drive & Departure", desc: "Queen's Necklace jog, Kyani & Co coffee, Chowpatty bhel puri." }
    ],
    highlights: ["🗼 Gateway of India", "🏛️ CST Station", "🎨 Bandra Street Art", "🌃 Marine Drive"]
  }
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB connected');

    await Itinerary.deleteMany({});
    console.log('🗑️  Old itineraries cleared');

    const inserted = await Itinerary.insertMany(data);
    console.log(`✅ Inserted ${inserted.length} itineraries:`);
    inserted.forEach(i => console.log(`   • ${i.title}`));

  } catch (err) {
    console.error('❌ Error:', err.message);
  } finally {
    await mongoose.disconnect();
    console.log('🔌 Done');
  }
}

seed();