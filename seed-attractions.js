require('dotenv').config();

// ✅ use same mongo connection as your server
const connectMongo = require('./config/mongo');

// ✅ correct path — same as server.js line 231
const Attraction = require('./models/Attraction');

const data = [

  // ── GOA ──
  {
    citySlug: "goa", cityName: "Goa",
    name: "Calangute Beach",
    description: "King of beaches in Goa, famous for water sports, vibrant beach shacks and stunning sunsets along the Arabian Sea coast.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    lat: 15.5449, lng: 73.7517
  },
  {
    citySlug: "goa", cityName: "Goa",
    name: "Fort Aguada",
    description: "17th-century Portuguese fort perched on a headland with a lighthouse and breathtaking panoramic views of the Arabian Sea.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
    lat: 15.4894, lng: 73.7733
  },
  {
    citySlug: "goa", cityName: "Goa",
    name: "Dudhsagar Falls",
    description: "One of India's tallest waterfalls at 310 metres, cascading in four tiers through the dense Western Ghats jungle.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    lat: 15.3144, lng: 74.3144
  },
  {
    citySlug: "goa", cityName: "Goa",
    name: "Basilica of Bom Jesus",
    description: "UNESCO World Heritage church built in 1605, housing the sacred remains of St. Francis Xavier.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
    lat: 15.5009, lng: 73.9116
  },
  {
    citySlug: "goa", cityName: "Goa",
    name: "Anjuna Flea Market",
    description: "Famous Wednesday flea market selling colourful clothes, handicrafts and Goan souvenirs since the 1960s.",
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=600",
    lat: 15.5736, lng: 73.7402
  },
  {
    citySlug: "goa", cityName: "Goa",
    name: "Palolem Beach",
    description: "Serene crescent-shaped beach in South Goa lined with coconut palms, perfect for kayaking and dolphin spotting.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    lat: 15.0100, lng: 74.0232
  },

  // ── MUMBAI ──
  {
    citySlug: "mumbai", cityName: "Mumbai",
    name: "Gateway of India",
    description: "Iconic 26-metre basalt arch built in 1924, overlooking the Arabian Sea — the most recognisable landmark in Mumbai.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
    lat: 18.9220, lng: 72.8347
  },
  {
    citySlug: "mumbai", cityName: "Mumbai",
    name: "Elephanta Caves",
    description: "UNESCO World Heritage rock-cut cave temples on Elephanta Island dedicated to Lord Shiva, dating back to the 5th century.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
    lat: 18.9633, lng: 72.9315
  },
  {
    citySlug: "mumbai", cityName: "Mumbai",
    name: "Marine Drive",
    description: "The Queen's Necklace — a stunning 3.6 km C-shaped promenade along the coastline, magical at night.",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600",
    lat: 18.9438, lng: 72.8230
  },
  {
    citySlug: "mumbai", cityName: "Mumbai",
    name: "Chhatrapati Shivaji Terminus",
    description: "UNESCO-listed Victorian Gothic railway station built in 1887, blending Gothic and Indian architectural styles.",
    image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7?w=600",
    lat: 18.9399, lng: 72.8355
  },
  {
    citySlug: "mumbai", cityName: "Mumbai",
    name: "Dhobi Ghat",
    description: "World's largest open-air laundromat with over 700 flogging stones — an iconic Mumbai landmark since the 1890s.",
    image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e66?w=600",
    lat: 18.9548, lng: 72.8352
  },
  {
    citySlug: "mumbai", cityName: "Mumbai",
    name: "Juhu Beach",
    description: "Mumbai's most popular beach, beloved for street food stalls, stunning sunsets and Bollywood celebrity sightings.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    lat: 19.0883, lng: 72.8264
  },

  // ── JAIPUR ──
  {
    citySlug: "jaipur", cityName: "Jaipur",
    name: "Amber Fort",
    description: "Majestic 16th-century hilltop fort built from amber and white marble, famous for the Sheesh Mahal and elephant rides.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=600",
    lat: 26.9855, lng: 75.8513
  },
  {
    citySlug: "jaipur", cityName: "Jaipur",
    name: "Hawa Mahal",
    description: "The Palace of Winds — an extraordinary five-storey pink sandstone facade with 953 intricately carved windows built in 1799.",
    image: "https://img.freepik.com/premium-photo/hawa-mahal-palace-jaipur_78361-4447.jpg",
    lat: 26.9239, lng: 75.8267
  },
  {
    citySlug: "jaipur", cityName: "Jaipur",
    name: "City Palace",
    description: "Magnificent royal palace complex in the old walled city, home to a museum with rare artefacts, textiles and weaponry.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
    lat: 26.9258, lng: 75.8237
  },
  {
    citySlug: "jaipur", cityName: "Jaipur",
    name: "Jantar Mantar",
    description: "UNESCO-listed astronomical observatory built in 1734 containing the world's largest stone sundial accurate to two seconds.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
    lat: 26.9246, lng: 75.8242
  },
  {
    citySlug: "jaipur", cityName: "Jaipur",
    name: "Nahargarh Fort",
    description: "18th-century hilltop fort offering breathtaking panoramic views of Jaipur city, especially stunning at sunset.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
    lat: 26.9396, lng: 75.8143
  },

  // ── MANALI ──
  {
    citySlug: "manali", cityName: "Manali",
    name: "Rohtang Pass",
    description: "Dramatic high mountain pass at 3,978 metres with vast snowfields and glaciers, gateway to Lahaul and Spiti valleys.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    lat: 32.3721, lng: 77.2432
  },
  {
    citySlug: "manali", cityName: "Manali",
    name: "Solang Valley",
    description: "Adventure capital near Manali offering skiing in winter and paragliding, zorbing and cable car rides in summer.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=600",
    lat: 32.3195, lng: 77.1570
  },
  {
    citySlug: "manali", cityName: "Manali",
    name: "Hadimba Temple",
    description: "Ancient 1553 wooden pagoda temple dedicated to Goddess Hadimba, set in a dense deodar cedar forest.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
    lat: 32.2396, lng: 77.1715
  },
  {
    citySlug: "manali", cityName: "Manali",
    name: "Beas River",
    description: "Crystal-clear Himalayan river rushing through Manali valley, ideal for white-water rafting and riverside picnics.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
    lat: 32.2432, lng: 77.1892
  },

  // ── KERALA ──
  {
    citySlug: "kerala", cityName: "Kerala",
    name: "Alleppey Backwaters",
    description: "Serene 900 km network of lagoons and canals best explored on a traditional Kerala houseboat drifting past paddy fields.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
    lat: 9.4981, lng: 76.3388
  },
  {
    citySlug: "kerala", cityName: "Kerala",
    name: "Munnar Tea Gardens",
    description: "Breathtaking emerald tea plantations stretching across misty Western Ghats hills at 1,600 metres above sea level.",
    image: "https://images.unsplash.com/photo-1600256697461-ede50f3bf2c7?w=600",
    lat: 10.0889, lng: 77.0595
  },
  {
    citySlug: "kerala", cityName: "Kerala",
    name: "Fort Kochi",
    description: "Charming historic seafront town with iconic Chinese fishing nets, colonial buildings and thriving art cafes.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
    lat: 9.9658, lng: 76.2421
  },
  {
    citySlug: "kerala", cityName: "Kerala",
    name: "Varkala Beach",
    description: "Dramatic red laterite cliff-top beach with natural mineral springs and spectacular Arabian Sea sunsets.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600",
    lat: 8.7379, lng: 76.7163
  },

  // ── VARANASI ──
  {
    citySlug: "varanasi", cityName: "Varanasi",
    name: "Dashashwamedh Ghat",
    description: "Main ghat on the sacred Ganges and venue of the spectacular nightly Ganga Aarti fire ceremony attended by thousands.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600",
    lat: 25.3063, lng: 83.0147
  },
  {
    citySlug: "varanasi", cityName: "Varanasi",
    name: "Kashi Vishwanath Temple",
    description: "One of the holiest Hindu temples in India dedicated to Lord Shiva, attracting over 3 million pilgrims every year.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
    lat: 25.3109, lng: 83.0107
  },
  {
    citySlug: "varanasi", cityName: "Varanasi",
    name: "Sarnath",
    description: "Sacred site where Buddha gave his first sermon in 528 BC. The Dhamek Stupa stands 43 metres tall.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
    lat: 25.3800, lng: 83.0246
  },
  {
    citySlug: "varanasi", cityName: "Varanasi",
    name: "Manikarnika Ghat",
    description: "Most sacred cremation ghat burning continuously for over 3,500 years — a profound window into life and death.",
    image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=600",
    lat: 25.3113, lng: 83.0120
  },

  // ── SHIMLA ──
  {
    citySlug: "shimla", cityName: "Shimla",
    name: "The Ridge",
    description: "Large open promenade at the heart of Shimla at 2,213 metres with sweeping views of the snow-capped Himalayan peaks.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    lat: 31.1048, lng: 77.1734
  },
  {
    citySlug: "shimla", cityName: "Shimla",
    name: "Mall Road",
    description: "Main pedestrian promenade lined with colonial-era shops, ice cream parlours and heritage buildings.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
    lat: 31.1041, lng: 77.1720
  },
  {
    citySlug: "shimla", cityName: "Shimla",
    name: "Jakhu Temple",
    description: "Ancient Hanuman temple atop Jakhu Hill at 2,455 metres, surrounded by rhesus monkeys and offering city-wide views.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
    lat: 31.1028, lng: 77.1868
  },
  {
    citySlug: "shimla", cityName: "Shimla",
    name: "Kufri",
    description: "Charming hill station 13 km from Shimla, famous for yak rides, snow activities and the Himalayan Nature Park.",
    image: "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?w=600",
    lat: 31.0980, lng: 77.2640
  },
  {
    citySlug: "shimla", cityName: "Shimla",
    name: "Kalka-Shimla Toy Train",
    description: "UNESCO Heritage narrow-gauge railway climbing 96 km through 102 tunnels and 864 bridges — a living engineering wonder.",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600",
    lat: 31.1041, lng: 77.1662
  },

  // ── PUNE ──
  {
    citySlug: "pune", cityName: "Pune",
    name: "Shaniwar Wada",
    description: "Imposing 18th-century fortification palace of the Maratha Peshwa rulers — a haunting symbol of Pune's imperial past.",
    image: "https://images.unsplash.com/photo-1588096344356-9b497a9b8b88?w=600",
    lat: 18.5196, lng: 73.8553
  },
  {
    citySlug: "pune", cityName: "Pune",
    name: "Sinhagad Fort",
    description: "Historic hilltop fort at 1,312 metres, famous for the Battle of Sinhagad in 1670 and stunning sunrise valley views.",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600",
    lat: 18.3661, lng: 73.7552
  },
  {
    citySlug: "pune", cityName: "Pune",
    name: "Aga Khan Palace",
    description: "Grand 1892 Italian-arch palace where Mahatma Gandhi was interned during the Quit India Movement.",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600",
    lat: 18.5529, lng: 73.9017
  },
  {
    citySlug: "pune", cityName: "Pune",
    name: "Osho Ashram",
    description: "World-famous meditation and wellness resort in lush Koregaon Park, attracting seekers from over 100 countries.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=600",
    lat: 18.5354, lng: 73.8956
  },
  {
    citySlug: "pune", cityName: "Pune",
    name: "Dagdusheth Temple",
    description: "Magnificent Ganesh temple built in 1893, one of Pune's most beloved and richly decorated shrines.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
    lat: 18.5162, lng: 73.8554
  }

];

async function seed() {
  try {
    /* ── connect using your project's own mongo config ── */
    await connectMongo();
    console.log('✅ MongoDB connected\n');

    /* ── clear old data ── */
    const deleted = await Attraction.deleteMany({});
    console.log(`🗑️  Cleared ${deleted.deletedCount} old attractions\n`);

    /* ── insert new data ── */
    const inserted = await Attraction.insertMany(data);
    console.log(`✅ Inserted ${inserted.length} attractions\n`);

    /* ── summary ── */
    const cities = [...new Set(data.map(d => d.cityName))];
    cities.forEach(city => {
      const count = data.filter(d => d.cityName === city).length;
      console.log(`   📍 ${city.padEnd(12)} — ${count} attractions`);
    });

    console.log('\n🎉 Done!');

  } catch (err) {
    console.error('❌ Seed failed:', err.message);
    console.error(err);
  } finally {
    process.exit(0);
  }
}

seed();