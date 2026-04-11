// ═══════════════════════════════════════════════════════════════════
//  Jammu & Kashmir — MongoDB Seed Data
//  Run:  node jk-seed.js   (make sure mongoose is connected first)
// ═══════════════════════════════════════════════════════════════════
require('dotenv').config();
const mongoose = require("mongoose");
const City = require("./models/city"); // adjust path if needed


mongoose.connect("mongodb+srv://vijayrajwagh002:Vijay002@budgettrip.qe1i9mg.mongodb.net/?appName=BudgetTrip");

const jkData = [
  {
 
  name:"Leh", slug:"leh", state:"Ladakh", type:"City",
    avgCostPerDay:3500, rating:4.9,
    description:"The ancient capital of Ladakh at 3,524 m — a city of Buddhist monasteries, dramatic desert mountains, and the crossroads of Silk Road civilisations.",
    information:"Leh is the largest town and capital of the Ladakh Union Territory, sitting at 3,524 m in the Indus Valley. It was a major Silk Road trading post between India, Tibet, and Central Asia. The old city is dominated by the 17th-century Leh Palace modelled on the Potala in Lhasa. The surrounding landscape of stark brown mountains, turquoise rivers, and impossibly blue skies is one of the most dramatic on Earth. Leh is the base for Nubra Valley, Pangong Lake, Zanskar, and the world's highest motorable roads.",
    bestTimeToVisit:"June – September", weather:"15°C – 30°C (summer) · -20°C in winter",
    language:"Ladakhi, Hindi, Tibetan", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85",
    images:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85","https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85","https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85"],
    lat:34.1526, lng:77.5771,
    highlights:["Leh Palace","Shanti Stupa","Monastery Circuit","Leh Market & Bazaar","Indus River Rafting","Stargazing at 3,524 m"],
    attractions:[
      {name:"Leh Palace",description:"A 17th-century nine-storey royal palace modelled on the Potala Palace in Lhasa, perched on a crag above the old city with sweeping views of the Indus Valley.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:34.1660,lng:77.5850},
      {name:"Shanti Stupa",description:"A gleaming white Buddhist stupa built by Japanese monks in 1991 on a hilltop at 3,617 m. The 360° view of Leh, the Zanskar range, and the Indus Valley at sunset is unforgettable.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&q=80",lat:34.1590,lng:77.5640},
      {name:"Thiksey Monastery",description:"The most visually striking monastery in Ladakh — a 12-storey complex rising from a rocky crag 19 km from Leh, housing a 15 m Maitreya Buddha statue. The 6am prayer ceremony is extraordinary.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:34.0417,lng:77.6671},
      {name:"Namgyal Tsemo Gompa",description:"The oldest monastery in Leh built in 1430, crowning the hilltop above Leh Palace. Houses a 7.5 m gold Maitreya Buddha and ancient murals. Best visited at dusk.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=700&q=80",lat:34.1680,lng:77.5870}
    ],
    thingsToDo:[
      {name:"Indus & Zanskar River Rafting",description:"White-water rafting on the confluence of the Indus and Zanskar rivers near Nimmu — Grade III–IV rapids through dramatic canyon scenery. One of India's finest river runs.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",duration:"3 – 4 hours",category:"Adventure",price:1200},
      {name:"Monastery Circuit Day Trip",description:"Visit Shey, Thiksey, Hemis, Stakna, and Matho in a single day along the Indus Valley. Rent a taxi or motorcycle for the full loop.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"Full day",category:"Heritage & Culture",price:800},
      {name:"Leh Market Shopping",description:"Browse the main bazaar for Thangka paintings, turquoise jewellery, pashmina, Ladakhi masks, prayer flags, and hand-knotted rugs.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"2 – 3 hours",category:"Shopping",price:0},
      {name:"Stargazing",description:"At 3,524 m with minimal light pollution and clear dry air, Leh offers some of the finest stargazing in Asia. The Milky Way is visible to the naked eye on cloudless nights.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",duration:"2 – 3 hours",category:"Nature",price:500}
    ],
    hotels:[
      {name:"The Grand Dragon Ladakh",description:"Leh's finest luxury hotel with panoramic mountain views, spa, heated indoor pool, and the best restaurant in town.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",pricePerNight:12000,rating:4.9,stars:5,link:"https://www.booking.com",lat:34.1540,lng:77.5780},
      {name:"Hotel Ladakh Palace",description:"Well-regarded mid-range hotel with mountain-view rooms, a rooftop terrace, and an excellent Ladakhi kitchen.",image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",pricePerNight:3500,rating:4.5,stars:3,link:"https://www.booking.com",lat:34.1530,lng:77.5765},
      {name:"Stok Palace Heritage Hotel",description:"Stay in a real 200-year-old royal palace converted by the Ladakhi royal family. 14 km from Leh with extraordinary authenticity.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:6500,rating:4.7,stars:4,link:"https://www.booking.com",lat:34.0960,lng:77.5920}
    ],
    nearbyPlaces:[
      {name:"Khardung La",description:"World's highest motorable pass at 5,359 m, 39 km from Leh.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",distanceKm:39,slug:"khardung-la",lat:34.2768,lng:77.6006},
      {name:"Pangong Lake",description:"The iconic blue lake on the India-China border, 160 km from Leh.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",distanceKm:160,slug:"pangong-lake",lat:33.7667,lng:78.6833}
    ],
    reviews:[
      {author:"Rohan S.",rating:5,comment:"Leh is unlike anywhere else on Earth. The landscape, the monasteries, the people — every single day here felt like a privilege. Changed my life."},
      {author:"Priya N.",rating:5,comment:"Acclimatize properly — take 2 full rest days first. After that, this is pure magic. The monastery circuit at sunrise is unforgettable."},
      {author:"James T.",rating:5,comment:"The Grand Dragon hotel is exceptional. Leh is the most remarkable place I have visited in 30 years of travel."}
    ]
  },
  {
    name:"Pangong Lake", slug:"pangong-lake", state:"Ladakh", type:"Natural Wonder",
    avgCostPerDay:2800, rating:4.9,
    description:"The world's highest saltwater lake at 4,350 m — 134 km long with water that shifts from turquoise to deep blue to violet as the light changes. Sixty percent lies in China.",
    information:"Pangong Tso is one of the most remarkable natural spectacles in Asia. The lake straddles the India-China LAC — 40% India, 60% China. Non-fishable and slightly saline despite its brilliant colour. The colours shift dramatically through the day. Migratory Bar-headed Geese and Brahminy Ducks breed here in summer. Made famous worldwide by the film 3 Idiots. The drive from Leh via Chang La (5,360 m) is itself spectacular.",
    bestTimeToVisit:"May – September", weather:"5°C – 20°C (summer) · -30°C in winter (frozen solid)",
    language:"Ladakhi, Hindi", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85",
    images:["https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85","https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85","https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85"],
    lat:33.7667, lng:78.6833,
    highlights:["Shifting Blue–Turquoise–Violet Water","Chang La Pass Drive (5,360 m)","Sunrise & Sunset Photography","3 Idiots Film Location","Brahminy Duck & Bar-headed Geese","Frozen Lake Walk (Winter)"],
    attractions:[
      {name:"Pangong Tso Shoreline",description:"The main camping area on the Indian side — bright green grass beside electric-blue water with barren brown Tibetan mountains as backdrop. Utterly surreal.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=700&q=80",lat:33.7667,lng:78.6833},
      {name:"Chang La Pass",description:"The 5,360 m mountain pass on the road from Leh to Pangong — third highest motorable road in the world. A shrine to the legendary Changla Baba sits at the summit.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&q=80",lat:34.0070,lng:77.9480},
      {name:"Spangmik Village",description:"A tiny village of 50 families on the lake shore — the last civilian settlement before the LAC. Villagers rent tents, yurts, and run simple cafes overlooking the lake.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:33.7800,lng:78.7000},
      {name:"Merak Village",description:"Remote village 15 km beyond Spangmik — far fewer tourists, even more dramatic lake views, and traditional Changpa nomadic culture.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:33.8100,lng:78.7500}
    ],
    thingsToDo:[
      {name:"Sunrise Photography",description:"Wake at 4:30am to see the lake transform from silver to the most intense blue imaginable as the sun clears the Tibetan plateau. The finest photography moment in Ladakh.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",duration:"2 hours",category:"Photography",price:0},
      {name:"Camping on the Lakeshore",description:"Spend a night in a tent or yurt right on the lake's edge. Fall asleep to lapping water under a sky dense with stars.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"1 – 2 nights",category:"Camping",price:1500},
      {name:"Kayaking on Pangong",description:"Paddle a kayak on the world's highest saltwater lake with the Tibetan plateau stretching away on the far shore.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"1 – 2 hours",category:"Water Activity",price:800},
      {name:"Birdwatching",description:"The lake is a breeding ground for Bar-headed Geese (world's highest-flying bird) and Brahminy Ducks. June–August is peak breeding season.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",duration:"2 – 3 hours",category:"Nature",price:0}
    ],
    hotels:[
      {name:"The Pangong Retreat Camp",description:"Premium glamping tents with wooden floors, proper beds, attached washrooms, and panoramic lake views directly on the lakeshore.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",pricePerNight:5500,rating:4.8,stars:4,link:"https://www.booking.com",lat:33.7670,lng:78.6840},
      {name:"Norling Camp Pangong",description:"Comfortable tented camp at Spangmik managed by Ladakhi families with home-cooked dal-rice and campfire evenings by the lake.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:2500,rating:4.6,stars:3,link:"https://www.booking.com",lat:33.7680,lng:78.6850},
      {name:"Pangong Sarai Resort",description:"Stone-and-timber cottages 2 km from the lake with full board, hot showers, and authentic Ladakhi atmosphere.",image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",pricePerNight:4200,rating:4.7,stars:3,link:"https://www.booking.com",lat:33.7650,lng:78.6820}
    ],
    nearbyPlaces:[
      {name:"Leh",description:"Capital of Ladakh and base for the Pangong trip, 160 km away.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",distanceKm:160,slug:"leh",lat:34.1526,lng:77.5771},
      {name:"Tso Moriri",description:"Another stunning high-altitude lake, 220 km from Pangong via Leh.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",distanceKm:220,slug:"tso-moriri",lat:32.9000,lng:78.3167}
    ],
    reviews:[
      {author:"Aryan M.",rating:5,comment:"No photograph does Pangong justice. The colours are genuinely impossible. I sat on the shore for two hours and could not move."},
      {author:"Lisa K.",rating:5,comment:"Camped here for two nights. The silence, the stars, the lake at sunrise — easily the most beautiful place I have ever been."},
      {author:"Vivek P.",rating:4,comment:"Cold at night even in August — bring warm layers. The drive via Chang La is an adventure in itself. Worth every bit of the journey."}
    ]
  },
  {
    name:"Nubra Valley", slug:"nubra-valley", state:"Ladakh", type:"Valley",
    avgCostPerDay:3000, rating:4.8,
    description:"The Orchard of Ladakh — a magical cold desert with Bactrian camels at 3,048 m, framed by the Karakoram, accessible only via the world's highest motorable road.",
    information:"Nubra Valley is formed by the confluence of the Shyok and Siachen rivers between the Ladakh and Karakoram ranges. Accessible only by crossing Khardung La (5,359 m), it sits at 3,048 m with a surprisingly warm microclimate supporting apricot trees and vegetable gardens. The famous Bactrian (two-humped) camels at Hunder are relics of the ancient Silk Road. Diskit Monastery is the oldest in Nubra. The remote village of Turtuk at the northern end — only opened to tourists in 2010 — lies just 4 km from Pakistani territory.",
    bestTimeToVisit:"June – September", weather:"10°C – 28°C (summer) · -25°C in winter",
    language:"Ladakhi, Balti, Hindi", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85",
    images:["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85","https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85"],
    lat:34.6333, lng:77.5833,
    highlights:["Bactrian Camel Safari (Hunder Dunes)","Diskit Monastery & 32 m Maitreya Buddha","Khardung La Crossing","Turtuk Village (Silk Road Culture)","Panamik Hot Springs","Sea Buckthorn Orchards"],
    attractions:[
      {name:"Hunder Sand Dunes & Bactrian Camels",description:"Cold desert sand dunes at 3,100 m with a herd of double-humped Bactrian camels — the only place in India to ride them. The backdrop of snow-capped Karakoram peaks is surreal.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&q=80",lat:34.6500,lng:77.4833},
      {name:"Diskit Monastery",description:"The oldest and largest monastery in Nubra Valley, founded in the 14th century. The giant 32 m Maitreya Buddha statue gazing across the valley is magnificent.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:34.6700,lng:77.5600},
      {name:"Turtuk Village",description:"India's northernmost village open to tourists — a lush green oasis at the Karakoram foothills inhabited by Balti people with ancient apricot orchards and a 700-year-old polo ground.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:34.8450,lng:76.8320},
      {name:"Panamik Hot Springs",description:"Natural hot sulphur springs at Panamik village — open-air pools with dramatic mountain views. The perfect place to soak after a cold Nubra night.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=700&q=80",lat:34.7900,lng:77.5900}
    ],
    thingsToDo:[
      {name:"Bactrian Camel Safari",description:"Ride a rare double-humped Bactrian camel across the Hunder sand dunes at sunset with the snow-capped Karakoram as backdrop. One of Ladakh's most iconic experiences.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"30 – 60 minutes",category:"Adventure",price:600},
      {name:"Turtuk Village Day Trip",description:"Drive 90 km to India's northernmost accessible village — walk ancient lanes, visit the Yabgo family palace, taste fresh apricots, and see the Karakoram up close.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"Full day",category:"Cultural Experience",price:1500},
      {name:"Nubra Valley Cycling",description:"Cycle through the valley between Diskit and Hunder on quiet roads flanked by apricot orchards and willows with the Karakoram above.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",duration:"3 – 4 hours",category:"Adventure",price:400},
      {name:"Diskit Monastery Morning Prayer",description:"Attend the 6am prayer ceremony — monks in saffron robes, butter lamps, chanting, and the Karakoram dawn light turning the monastery gold.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",duration:"1 – 2 hours",category:"Cultural Experience",price:0}
    ],
    hotels:[
      {name:"Nubra Ethnic Camp",description:"Luxury eco-tents in a garden between Diskit monastery and Hunder dunes — the finest glamping in Nubra with attached bathrooms and central heating.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",pricePerNight:6500,rating:4.9,stars:4,link:"https://www.booking.com",lat:34.6600,lng:77.5200},
      {name:"The Organic Retreat Hunder",description:"Comfortable stone cottages in an organic garden farm at Hunder, 500 m from the sand dunes. Excellent home-cooked Ladakhi food.",image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",pricePerNight:3800,rating:4.7,stars:3,link:"https://www.booking.com",lat:34.6520,lng:77.4850},
      {name:"Olthang Camp Diskit",description:"Budget-friendly tented camp in Diskit with a stunning view of the monastery and Shyok Valley.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:1800,rating:4.3,stars:2,link:"https://www.booking.com",lat:34.6710,lng:77.5610}
    ],
    nearbyPlaces:[
      {name:"Khardung La",description:"The 5,359 m pass crossed to reach Nubra from Leh, 39 km south.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",distanceKm:39,slug:"khardung-la",lat:34.2768,lng:77.6006},
      {name:"Leh",description:"Capital of Ladakh, 120 km from Nubra Valley via Khardung La.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",distanceKm:120,slug:"leh",lat:34.1526,lng:77.5771}
    ],
    reviews:[
      {author:"Karan S.",rating:5,comment:"Riding a Bactrian camel on desert dunes with Himalayan glaciers above you — the most impossible landscape I have ever seen."},
      {author:"Emma R.",rating:5,comment:"Turtuk village was the highlight. Eating fresh apricots from the tree with 8,000 m peaks above — pure happiness."},
      {author:"Suresh K.",rating:4,comment:"The Nubra Ethnic Camp is worth every rupee. The camel safari at sunset from camp is unforgettable. Book ahead in peak season."}
    ]
  },
  {
    name:"Khardung La", slug:"khardung-la", state:"Ladakh", type:"Mountain Pass",
    avgCostPerDay:1500, rating:4.7,
    description:"The world's highest motorable pass at 5,359 m — a pilgrimage for motorcyclists and gateway to Nubra Valley, offering staggering views of the Karakoram range.",
    information:"Khardung La sits at 5,359 m in the Ladakh range north of Leh. The road is maintained by the Border Roads Organisation and serves as the supply route to the Siachen Glacier. At the summit a small temple, chai stalls, and a BRO canteen are all that exist at this altitude. The pass is typically open May to November. On clear days views extend north to the Karakoram and south to the Zanskar range.",
    bestTimeToVisit:"June – October", weather:"-5°C to 10°C (summer peak) · heavily snowbound in winter",
    language:"Ladakhi, Hindi", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85",
    images:["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85","https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85"],
    lat:34.2768, lng:77.6006,
    highlights:["5,359 m Summit Sign","Karakoram Range Views","BRO Canteen at the Top","Motorcycle Pilgrimage","Prayer Flag Walls","Snow Fields Year-Round"],
    attractions:[
      {name:"Khardung La Summit",description:"The iconic 5,359 m summit with the famous signboard — snow fields, prayer flags, and 360° views of the Karakoram and Ladakh ranges.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&q=80",lat:34.2768,lng:77.6006},
      {name:"South Pullu Checkpoint",description:"The army checkpoint 15 km below the summit on the Leh side — the last stop before the final ascent with stunning mountain views already.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:34.2200,lng:77.5900},
      {name:"North Pullu Viewpoint",description:"On the descent towards Nubra at 4,800 m — the first sweeping views of the Nubra Valley, green villages and the silver Shyok River far below.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:34.3200,lng:77.6100}
    ],
    thingsToDo:[
      {name:"Motorcycle Ride to the Summit",description:"Every motorcyclist's dream — ride a Royal Enfield from Leh to the 5,359 m summit. The switchback road, thin air, and the achievement make it unforgettable.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"Full day from Leh",category:"Adventure",price:800},
      {name:"Summit Photography",description:"Photograph the iconic summit signboard, prayer flags against blue sky, and the panoramic Karakoram views. Most visitors spend 20–30 minutes due to altitude.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",duration:"30 minutes at summit",category:"Photography",price:0},
      {name:"Leh–Nubra Overland Journey",description:"The classic 2-day journey: Leh to Khardung La to Nubra Valley to Diskit to Hunder. Cross the highest road, descend into desert, camp by Bactrian camels.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"2 days",category:"Road Trip",price:3500}
    ],
    hotels:[
      {name:"BRO Canteen — Summit",description:"Basic chai stalls and BRO canteen at the summit — not accommodation but the only facilities at this altitude. Most visitors stay in Leh.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:500,rating:3.5,stars:1,link:"https://www.jktourism.org",lat:34.2770,lng:77.6010},
      {name:"Camp at North Pullu",description:"Tented camp on the Nubra-side descent at 4,600 m — one of the highest camping spots in Ladakh with extraordinary sunrise views over Nubra Valley.",image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",pricePerNight:2000,rating:4.2,stars:2,link:"https://www.booking.com",lat:34.3210,lng:77.6110}
    ],
    nearbyPlaces:[
      {name:"Leh",description:"Capital of Ladakh, 39 km south of Khardung La.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",distanceKm:39,slug:"leh",lat:34.1526,lng:77.5771},
      {name:"Nubra Valley",description:"The stunning desert valley with Bactrian camels, 81 km from the summit.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",distanceKm:81,slug:"nubra-valley",lat:34.6333,lng:77.5833}
    ],
    reviews:[
      {author:"Dev R.",rating:5,comment:"Rode my Bullet up here at 5am in clear weather. The Karakoram in golden dawn light — one of the greatest moments of my life."},
      {author:"Sophie M.",rating:4,comment:"Hard to breathe at the top but the views are worthwhile. The altitude hits fast — take it slow and enjoy every metre of the climb."},
      {author:"Ajay V.",rating:5,comment:"The Leh–Khardung La–Nubra overnight journey is the perfect Ladakh introduction. Do this before anything else."}
    ]
  },
  {
    name:"Kargil", slug:"kargil", state:"Ladakh", type:"City",
    avgCostPerDay:2000, rating:4.4,
    description:"The second largest town in Ladakh at 2,676 m — gateway to Zanskar Valley and Suru Valley, with a fascinating Shia Muslim culture and the Kargil War Memorial.",
    information:"Kargil sits at the crossroads of routes to Leh, Srinagar, Zanskar, and the Suru Valley. Famous internationally for the 1999 Kargil War — the world's highest-altitude conflict — fought on the peaks around the city. The town has a distinct Shia Muslim character unlike Buddhist Leh, creating a fascinating cultural hybrid. The Suru Valley has superb trekking and the twin peaks of Nun (7,135 m) and Kun (7,077 m) are visible from the valley.",
    bestTimeToVisit:"June – October", weather:"12°C – 30°C (summer) · -25°C in winter",
    language:"Ladakhi, Urdu, Hindi, Balti", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85",
    images:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85","https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85","https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85"],
    lat:34.5539, lng:76.1349,
    highlights:["Kargil War Memorial (Drass)","Nun-Kun Twin Peaks (7,135 m)","Suru Valley","Mulbekh Rock Carving","Drass — Coldest Inhabited Town in India","Rangdum Monastery"],
    attractions:[
      {name:"Kargil War Memorial — Drass",description:"An emotionally powerful memorial 60 km from Kargil at Drass honouring soldiers who died in the 1999 Kargil War. Tiger Hill where fierce fighting took place is visible above.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:34.4333,lng:75.7667},
      {name:"Mulbekh Rock Carving",description:"A 9 m Maitreya Buddha carved into a cliff face in the 8th century — one of the oldest and most significant rock carvings in Ladakh.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&q=80",lat:34.3633,lng:76.1920},
      {name:"Suru Valley & Nun-Kun View",description:"The Suru Valley south of Kargil offers a dramatic drive between glaciated peaks. The twin summits of Nun (7,135 m) and Kun (7,077 m) dominate the skyline on clear days.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:34.2000,lng:76.0500},
      {name:"Rangdum Monastery",description:"A remote 18th-century monastery on a lone hill in the Suru Valley, surrounded by glaciers and barren mountains — one of the most dramatically situated monasteries in Ladakh.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=700&q=80",lat:33.9333,lng:76.3667}
    ],
    thingsToDo:[
      {name:"Kargil War Memorial Visit",description:"Visit the memorial at Drass to understand the 1999 conflict — inscribed names, photographs, and the view of Tiger Hill above make for a deeply moving experience.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",duration:"2 – 3 hours",category:"Heritage",price:0},
      {name:"Suru Valley Drive & Trekking",description:"Drive or trek up the Suru Valley to Rangdum Monastery and the base of the Nun-Kun massif. One of Ladakh's least-visited and most spectacular valleys.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"Full day or multi-day",category:"Trekking",price:2000},
      {name:"Kargil Bazaar & Shia Culture Walk",description:"Explore Kargil's colourful market, visit the Jamia Masjid, taste local Balti food including Skyu and fresh Chhurpee cheese.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"2 – 3 hours",category:"Cultural Experience",price:0},
      {name:"Nun-Kun Mountaineering Expedition",description:"For experienced mountaineers — Nun (7,135 m) is one of India's most accessible 7,000 m peaks with established base camp routes from Panikhar.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",duration:"15 – 20 days",category:"Mountaineering",price:45000}
    ],
    hotels:[
      {name:"Hotel Caravan Sarai",description:"The best hotel in Kargil with comfortable rooms, a rooftop restaurant with Suru Valley views, and helpful staff who arrange Zanskar excursions.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",pricePerNight:3200,rating:4.4,stars:3,link:"https://www.booking.com",lat:34.5545,lng:76.1355},
      {name:"Hotel Zojila Residency",description:"Mid-range hotel on the main road with clean rooms, hot water, and a basic restaurant. Good base for Drass and Suru Valley.",image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",pricePerNight:1800,rating:4.0,stars:3,link:"https://www.booking.com",lat:34.5540,lng:76.1345},
      {name:"Rangdum Monastery Guesthouse",description:"Very basic monastery guesthouse at Rangdum — for the intrepid traveller wanting to stay in one of Ladakh's most remote and beautiful monasteries.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:800,rating:4.3,stars:1,link:"https://www.jktourism.org",lat:33.9340,lng:76.3670}
    ],
    nearbyPlaces:[
      {name:"Leh",description:"Capital of Ladakh, 234 km east of Kargil on NH-1.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",distanceKm:234,slug:"leh",lat:34.1526,lng:77.5771},
      {name:"Zanskar Valley",description:"Remote mountain valley accessible from Kargil via Suru Valley, 105 km away.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",distanceKm:105,slug:"zanskar-valley",lat:33.5000,lng:76.8000}
    ],
    reviews:[
      {author:"Vikram A.",rating:4,comment:"The war memorial at Drass is deeply moving. Understanding the 1999 conflict while looking up at Tiger Hill is a very powerful experience."},
      {author:"Rahul T.",rating:5,comment:"Suru Valley is Ladakh without the crowds. Nun-Kun above you, a tiny monastery on a hill, and almost no other tourists. Brilliant."},
      {author:"Maria C.",rating:4,comment:"Kargil is very different from Leh — more Islamic, more Central Asian. The cultural contrast within Ladakh is fascinating."}
    ]
  },
  {
    name:"Lamayuru", slug:"lamayuru", state:"Ladakh", type:"Village",
    avgCostPerDay:1800, rating:4.7,
    description:"The Moonland of Ladakh — a surreal lunar landscape surrounding one of Ladakh's oldest monasteries, perched on a cliff above a dried ancient lake bed.",
    information:"Lamayuru is famous for two things: its 1,000-year-old monastery (the oldest in Ladakh) and its extraordinary moonland landscape — a vast expanse of eroded grey hills formed from ancient lake bed sediment that looks entirely extraterrestrial. The monastery belongs to the Drikung Kagyu sect of Tibetan Buddhism and houses up to 150 monks. The annual Yuru Kabgyat festival (June–July) features spectacular masked Cham dances. The landscape changes dramatically at different times of day — golden in morning, ash-grey at midday, deep orange at sunset.",
    bestTimeToVisit:"June – October", weather:"8°C – 24°C (summer) · -22°C in winter",
    language:"Ladakhi, Hindi", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85",
    images:["https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85","https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85"],
    lat:34.2986, lng:76.7756,
    highlights:["Yuru Gompa (1,000-year-old Monastery)","Moonland Landscape","Yuru Kabgyat Festival","Lamayuru–Alchi Trek","Ancient Lake Bed Geology","Moonland Sunrise Photography"],
    attractions:[
      {name:"Lamayuru Monastery (Yuru Gompa)",description:"Ladakh's oldest monastery founded in the 11th century — whitewashed buildings clinging to a cliff above the moonland with stunning ancient murals inside.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:34.2986,lng:76.7756},
      {name:"Moonland Viewpoint",description:"The extraordinary eroded landscape visible from the monastery — ash-grey hills, gullies, and valleys that resemble the surface of the moon. Best at golden hour.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&q=80",lat:34.2980,lng:76.7740},
      {name:"Wanla Monastery",description:"A small but beautifully preserved monastery 12 km from Lamayuru on the Alchi trek route — houses remarkable 11th-century paintings and a tall Avalokitesvara statue.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:34.2500,lng:76.8100}
    ],
    thingsToDo:[
      {name:"Lamayuru–Alchi Trek (2 days)",description:"A magnificent 2-day trek from Lamayuru over Prinkiti La (3,700 m) through ancient villages to Alchi on the Indus. One of Ladakh's classic shorter treks.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"2 days",category:"Trekking",price:4000},
      {name:"Moonland Sunrise Photography",description:"Set up before dawn on the ridge above the monastery — as first light hits the grey hills and monastery walls, the scene turns deep burnt orange.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"2 hours",category:"Photography",price:0},
      {name:"Yuru Kabgyat Festival",description:"The annual 2-day masked Cham dance festival (June–July) — monks in elaborate silk costumes perform sacred dances in the monastery courtyard. Book ahead.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",duration:"2 days",category:"Cultural Festival",price:0}
    ],
    hotels:[
      {name:"Hotel Moonland",description:"The most atmospheric stay in Lamayuru — a small guesthouse built against the cliff face below the monastery with direct moonland views from the terrace.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",pricePerNight:2200,rating:4.6,stars:3,link:"https://www.booking.com",lat:34.2988,lng:76.7758},
      {name:"Monastery Guesthouse",description:"Simple rooms managed by the monastery itself — basic and clean with the extraordinary privilege of waking to morning prayers inside the monastery compound.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:1000,rating:4.4,stars:2,link:"https://www.jktourism.org",lat:34.2990,lng:76.7760}
    ],
    nearbyPlaces:[
      {name:"Kargil",description:"Second town of Ladakh, 107 km west of Lamayuru.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",distanceKm:107,slug:"kargil",lat:34.5539,lng:76.1349},
      {name:"Leh",description:"Capital of Ladakh, 127 km east of Lamayuru.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",distanceKm:127,slug:"leh",lat:34.1526,lng:77.5771}
    ],
    reviews:[
      {author:"Alex H.",rating:5,comment:"The moonland at sunrise is genuinely one of the most alien and beautiful landscapes on Earth. And the monastery itself is extraordinary — so ancient."},
      {author:"Priya K.",rating:5,comment:"Stayed in the monastery guesthouse. Woke at 5am to monks chanting. The moonland outside the window in dawn light. Perfect."},
      {author:"Carlos M.",rating:4,comment:"Worth a full stop rather than a passing visit. The Lamayuru–Alchi trek is wonderful. Give it at least one night."}
    ]
  },
  {
    name:"Hemis", slug:"hemis", state:"Ladakh", type:"Village",
    avgCostPerDay:2000, rating:4.8,
    description:"Home to Ladakh's richest and largest monastery, famous for the biennial Hemis Festival, the largest thangka in existence, and the legendary snow leopard sanctuary.",
    information:"Hemis Monastery, 45 km from Leh, is the wealthiest monastery in the Ladakh region belonging to the Drukpa Kagyu school of Tibetan Buddhism, re-established in 1672. Every 12 years it displays a colossal 3-storey thangka decorated with pearls and precious stones. The annual Hemis Festival (June–July) is Ladakh's biggest celebration — two days of masked Cham dances. The surrounding Hemis National Park is the largest national park in South Asia and the best place in the world to see the snow leopard.",
    bestTimeToVisit:"June – September (Jul for Hemis Festival)",
    weather:"12°C – 28°C (summer) · heavily snowbound in winter",
    language:"Ladakhi, Hindi", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85",
    images:["https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85","https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85"],
    lat:33.9200, lng:77.7000,
    highlights:["Hemis Monastery (Largest in Ladakh)","Hemis Tsechu Festival","Snow Leopard Spotting (Winter)","Hemis National Park","Markha Valley Trek","Giant Thangka (every 12 years)"],
    attractions:[
      {name:"Hemis Monastery",description:"The largest, wealthiest monastery in Ladakh built in a hidden gorge — temples, assembly halls, courtyards, and a museum of rare Buddhist artefacts.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=700&q=80",lat:33.9200,lng:77.7000},
      {name:"Hemis National Park",description:"South Asia's largest national park covering 4,400 sq km. Home to 200+ snow leopards, Tibetan wolves, Eurasian brown bears, and massive herds of bharal.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:33.8500,lng:77.6500},
      {name:"Markha Valley Trek Start",description:"One of Ladakh's finest trekking routes passes through Hemis National Park — 4–6 days through high passes, traditional villages, and exceptional wildlife habitat.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:33.8000,lng:77.6000}
    ],
    thingsToDo:[
      {name:"Snow Leopard Search (Winter)",description:"January–March is the best time to spot snow leopards as they descend to lower valleys. Expert local trackers guide multi-day snow leopard treks from Hemis.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",duration:"3 – 7 days",category:"Wildlife",price:15000},
      {name:"Hemis Festival (Tsechu)",description:"The annual June–July festival — two days of magnificent masked Cham dances by monks in elaborate costumes. One of Ladakh's greatest cultural spectacles.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",duration:"2 days",category:"Cultural Festival",price:0},
      {name:"Markha Valley Trek",description:"A classic 4–6 day trek through Hemis National Park — crossing Kongmaru La (5,150 m), passing through 6 traditional villages, finishing at Hemis Monastery.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"4 – 6 days",category:"Trekking",price:14000},
      {name:"Monastery Museum Visit",description:"The museum houses extraordinary Buddhist artefacts — ancient thangkas, masks, weapons, gold and silver stupas, and the story of the legendary Hemis thangka.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"1 – 2 hours",category:"Heritage & Culture",price:100}
    ],
    hotels:[
      {name:"Snow Leopard Lodge Rumbak",description:"A community-run lodge in Rumbak village inside Hemis National Park — the world's best base for snow leopard watching. All proceeds support local conservation.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",pricePerNight:5000,rating:4.8,stars:3,link:"https://www.booking.com",lat:33.8800,lng:77.6400},
      {name:"Hemis Monastery Guesthouse",description:"Simple rooms in the monastery village managed by local families. Wake to monastery bells and have the monastery entirely to yourself before day visitors arrive.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:1500,rating:4.4,stars:2,link:"https://www.booking.com",lat:33.9210,lng:77.7010}
    ],
    nearbyPlaces:[
      {name:"Leh",description:"Capital of Ladakh, 45 km from Hemis.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",distanceKm:45,slug:"leh",lat:34.1526,lng:77.5771},
      {name:"Pangong Lake",description:"The iconic blue lake, 190 km from Hemis.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",distanceKm:190,slug:"pangong-lake",lat:33.7667,lng:78.6833}
    ],
    reviews:[
      {author:"Tanvir K.",rating:5,comment:"Saw a snow leopard on day 3 of the winter trek. The guides are brilliant, the lodge is warm and welcoming, and the park is spectacular."},
      {author:"Nina P.",rating:5,comment:"The Hemis Festival is genuinely one of the most extraordinary things I have ever experienced. The Cham dances, the colours, the monks — absolutely magical."},
      {author:"Geoff S.",rating:4,comment:"The monastery museum is underrated. The collection of Buddhist art is world class. Combine with the Markha Valley trek for the complete experience."}
    ]
  },
  {
    name:"Zanskar Valley", slug:"zanskar-valley", state:"Ladakh", type:"Valley",
    avgCostPerDay:2800, rating:4.9,
    description:"The most remote valley in India at 3,500 m — cut off by snow 8 months a year, accessible only via mountain passes or the legendary Chadar frozen river trek in winter.",
    information:"Zanskar is one of the most isolated inhabited places in the world. The 300 km valley sits at 3,500–4,000 m, completely hemmed in by the Zanskar and Great Himalayan ranges. Cut off by snow October to May — residents were historically accessible in winter only via the Chadar (frozen Zanskar River) walk. The valley has important monasteries — Karsha, Phuktal, Padum. The Chadar Trek (January–February) on the frozen river is one of India's most unique adventures.",
    bestTimeToVisit:"Jul – Sep (road open) · Jan – Feb (Chadar Trek)",
    weather:"8°C – 22°C (summer) · -35°C in winter",
    language:"Zanskari (Tibetan dialect), Ladakhi", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85",
    images:["https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85","https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85"],
    lat:33.5000, lng:76.8000,
    highlights:["Chadar Frozen River Trek (Winter)","Phuktal Monastery (Cliff-face Cave)","Padum — Capital of Zanskar","Karsha Monastery","Pensi La Pass (4,400 m)","Zanskar River Rafting"],
    attractions:[
      {name:"Phuktal Monastery",description:"Possibly the most dramatically situated monastery in the world — built into a cliff-face cave above the Tsarap River gorge, accessible only by a 2-day trek. Founded in the 12th century.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&q=80",lat:33.2833,lng:77.2333},
      {name:"Chadar (Frozen Zanskar River)",description:"In January–February the Zanskar River freezes solid creating a natural ice road — the Chadar was historically the only winter lifeline for Zanskar. Now a legendary 8-day trek.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:34.1500,lng:77.0500},
      {name:"Karsha Monastery",description:"The largest monastery in Zanskar perched on a white cliff above the valley floor near Padum. Houses 80+ monks with spectacular views over the entire Zanskar plain.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:33.5667,lng:76.7833},
      {name:"Zanskar River Gorge",description:"Multi-day rafting through the dramatic gorge — Grade III–IV rapids through canyon walls rising 600 m on both sides. Among India's finest river expeditions.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=700&q=80",lat:34.0000,lng:77.1500}
    ],
    thingsToDo:[
      {name:"Chadar Frozen River Trek",description:"Walk on the frozen Zanskar River for 8 days in January–February through ice caves, frozen waterfalls, and gorges. The most extreme and unique trek in India.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",duration:"8 days",category:"Winter Trek",price:25000},
      {name:"Phuktal Monastery Trek",description:"A 2-day trek from Purne to reach the impossibly situated Phuktal Monastery built into a cliff cave — one of the most rewarding short treks in Zanskar.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"2 – 3 days",category:"Trekking",price:6000},
      {name:"Padum–Lamayuru Trek",description:"The classic 8-day traverse of Zanskar from Padum over multiple 4,800–5,000 m passes to Lamayuru on the Leh–Kargil highway. One of the great Himalayan treks.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"8 – 10 days",category:"Trekking",price:22000},
      {name:"Zanskar River Rafting Expedition",description:"3–5 days rafting through the Zanskar gorge from Padum to the Indus confluence — sheer canyon walls, Grade IV rapids, camping on beaches in total wilderness.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",duration:"3 – 5 days",category:"Water Adventure",price:18000}
    ],
    hotels:[
      {name:"Padum Guesthouse",description:"The best guesthouse in Zanskar's capital Padum — clean rooms, home-cooked Zanskari food, hot showers, and the most knowledgeable trekking guides in the valley.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",pricePerNight:2200,rating:4.6,stars:3,link:"https://www.booking.com",lat:33.5000,lng:76.8000},
      {name:"Karsha Village Homestay",description:"Stay with a Zanskari family below Karsha Monastery — eat from their farm, help feed the yaks, learn to make butter tea, and watch the sunrise over the monastery.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:1200,rating:4.8,stars:2,link:"https://www.booking.com",lat:33.5670,lng:76.7840},
      {name:"Chadar Trek Camp (Tilad Do)",description:"Base camp for the Chadar Trek on the frozen river — insulated tents rated to -40°C with local guides for the ice walk. Full board included.",image:"https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=80",pricePerNight:3500,rating:4.5,stars:2,link:"https://www.booking.com",lat:34.1510,lng:77.0510}
    ],
    nearbyPlaces:[
      {name:"Kargil",description:"Gateway to Zanskar from the north, 105 km via Pensi La.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",distanceKm:105,slug:"kargil",lat:34.5539,lng:76.1349},
      {name:"Lamayuru",description:"End point of the classic Padum–Lamayuru trek, 160 km from Padum.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",distanceKm:160,slug:"lamayuru",lat:34.2986,lng:76.7756}
    ],
    reviews:[
      {author:"Oliver W.",rating:5,comment:"The Chadar Trek is the most extraordinary experience of my life. Walking on a frozen river between ice walls in -25°C while monks walk past — completely unreal."},
      {author:"Asha R.",rating:5,comment:"Phuktal Monastery is unlike anything else in the world. The two-day trek through the gorge is breathtaking and the monastery itself is hauntingly beautiful."},
      {author:"Ravi P.",rating:5,comment:"Zanskar is what Ladakh was 30 years ago. Almost no tourists, genuine hospitality, incredible landscapes. The homestays are the real deal."}
    ]
  },
  {
    name:"Tso Moriri", slug:"tso-moriri", state:"Ladakh", type:"Natural Wonder",
    avgCostPerDay:2500, rating:4.8,
    description:"The highest wetland Ramsar site in the world at 4,522 m — a pristine high-altitude lake in the remote Rupshu plateau, home to the endangered black-necked crane.",
    information:"Tso Moriri sits at 4,522 m in the Rupshu plateau of Changtang, 225 km from Leh. Unlike the more visited Pangong, Tso Moriri sees very few tourists and retains a wildness that Pangong has partly lost. The 28 km long lake sits in a spectacular bowl with barren ochre mountains. It is one of only two high-altitude breeding grounds of the rare black-necked crane in India. The Changpa nomads graze their pashmina goats and yaks around the lake. The nearby village of Korzok is the highest permanent settlement in India at 4,595 m.",
    bestTimeToVisit:"June – September", weather:"5°C – 18°C (summer) · -35°C in winter",
    language:"Ladakhi, Changpa dialect", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85",
    images:["https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85","https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85","https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85"],
    lat:32.9000, lng:78.3167,
    highlights:["Black-Necked Crane Breeding Site","Korzok — Highest Village in India (4,595 m)","Changpa Nomad Culture","Pristine High-Altitude Wetland","Sunrise Lake Reflections","Tso Kar Salt Lake Nearby"],
    attractions:[
      {name:"Tso Moriri Lakeshore",description:"The pristine western shore near Korzok village — ochre mountains, wild Kiang (Tibetan wild ass), and the turquoise lake completely to yourself. Utterly unspoiled.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=700&q=80",lat:32.9000,lng:78.3167},
      {name:"Korzok Monastery & Village",description:"A tiny 17th-century monastery in India's highest permanently inhabited village (4,595 m). The annual Korzok Gustor festival features Cham dances against the backdrop of Tso Moriri.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:32.9800,lng:78.2700},
      {name:"Tso Kar (White Lake)",description:"A salt lake 60 km north of Tso Moriri — blinding white salt pans, flamingoes, and bar-headed geese. Usually combined with Tso Moriri in a 3-day Rupshu circuit.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:33.1500,lng:78.1833}
    ],
    thingsToDo:[
      {name:"Black-Necked Crane Watching",description:"June–August is breeding season for the endangered black-necked crane at Tso Moriri — one of only two breeding sites in India. Expert guides help locate nesting pairs.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",duration:"2 – 3 hours",category:"Wildlife",price:400},
      {name:"Rupshu Plateau Circuit",description:"A 3-day drive across the remote Rupshu plateau — Tso Kar salt lake, Thukjay Monastery, Changpa camps, and Tso Moriri. One of the greatest high-altitude road journeys in Asia.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"3 days",category:"Road Trip",price:5500},
      {name:"Changpa Nomad Visit",description:"Visit a Changpa family camp around the lake — see how they raise pashmina goats and yaks at 4,500 m, taste yak butter tea, and learn about life in one of the world's most extreme environments.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",duration:"2 – 3 hours",category:"Cultural Experience",price:300},
      {name:"Sunrise Photography",description:"The lake at first light with surrounding peaks reflected perfectly in the still water — arguably the finest sunrise photography location in all of Ladakh.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"2 hours",category:"Photography",price:0}
    ],
    hotels:[
      {name:"The Korzok Camp",description:"The finest tented camp at Tso Moriri — Swiss-style deluxe tents on the lakeshore with attached bathrooms, underfloor heating, and a central dining tent.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",pricePerNight:7500,rating:4.9,stars:4,link:"https://www.booking.com",lat:32.9010,lng:78.3180},
      {name:"Nomadic Life Camp",description:"Authentic Changpa-style yurt accommodation on the lakeshore — basic, cold, and utterly authentic. Sleep as the nomads sleep with the lake outside your door.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:2000,rating:4.5,stars:2,link:"https://www.booking.com",lat:32.9020,lng:78.3190}
    ],
    nearbyPlaces:[
      {name:"Leh",description:"Capital of Ladakh, 225 km from Tso Moriri via Chumathang.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",distanceKm:225,slug:"leh",lat:34.1526,lng:77.5771},
      {name:"Pangong Lake",description:"The other iconic Ladakh lake, 220 km from Tso Moriri.",image:"https://images.unsplash.com/photo-1548013146-72479768bada?w=600&q=80",distanceKm:220,slug:"pangong-lake",lat:33.7667,lng:78.6833}
    ],
    reviews:[
      {author:"Mia K.",rating:5,comment:"Far better than Pangong — no crowds, completely pristine. We were the only people on the lakeshore for hours. The silence at 4,500 m is indescribable."},
      {author:"Tarun S.",rating:5,comment:"Saw a pair of black-necked cranes and a herd of Kiang. The Rupshu circuit combining Tso Kar and Tso Moriri is the best 3 days in Ladakh."},
      {author:"Petra H.",rating:5,comment:"The Korzok Camp is exceptional. The sunrise over the lake from my tent — that image is burned into my memory forever."}
    ]
  },
  {
    name:"Alchi", slug:"alchi", state:"Ladakh", type:"Village",
    avgCostPerDay:1700, rating:4.6,
    description:"A tiny riverside village preserving the oldest surviving Buddhist art in the western Himalayas — 11th-century murals of extraordinary delicacy in a cluster of ancient temples.",
    information:"Alchi sits on the banks of the Indus River 70 km west of Leh. It is home to the Alchi Monastery complex — 5 temples founded by the Tibetan translator Rinchen Zangpo around 1000 CE. Unlike most Ladakhi monasteries built on hilltops, Alchi was built on flat ground and abandoned as a place of worship several centuries ago, preserving intact murals that are extraordinary examples of the Kashmir school of Buddhist art. The 11th-century paintings and wood carvings are UNESCO-recommended as the finest surviving examples of Kashmiri-influenced Buddhist art in the world.",
    bestTimeToVisit:"May – October", weather:"10°C – 28°C (summer) · -18°C in winter",
    language:"Ladakhi, Hindi", currency:"Indian Rupee (₹)",
    mainImage:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85",
    images:["https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=85","https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=900&q=85","https://images.unsplash.com/photo-1531761535209-180857e963b9?w=900&q=85","https://images.unsplash.com/photo-1548013146-72479768bada?w=900&q=85"],
    lat:34.2272, lng:77.1869,
    highlights:["1,000-Year-Old Buddhist Murals","Alchi Choskor Temple Complex","Indus River Picnic","Likir Monastery Nearby","Leh–Srinagar Highway Drive","Alchi Apricot Orchards"],
    attractions:[
      {name:"Alchi Choskor (Temple Complex)",description:"Five temples preserving the oldest Buddhist murals in Ladakh — extraordinary 11th-century paintings of mandalas, Bodhisattvas, and court scenes in the Kashmir style. A World Heritage Site in waiting.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",lat:34.2272,lng:77.1869},
      {name:"Likir Monastery",description:"A beautifully maintained 11th-century monastery 15 km from Alchi, famous for its enormous golden Maitreya Buddha statue and sweeping views of the Indus Valley.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=700&q=80",lat:34.2700,lng:77.1300},
      {name:"Indus River at Alchi",description:"The Indus flows clear and green past Alchi village — a beautiful spot for picnics, wild swimming, and watching the river. The contrast of blue water, green orchards, and brown mountains is stunning.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=700&q=80",lat:34.2260,lng:77.1850}
    ],
    thingsToDo:[
      {name:"Alchi Temple Art Tour",description:"A guided tour through the 5 temples with an art historian — understanding the iconography and technique of the 11th-century murals is revelatory.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",duration:"2 – 3 hours",category:"Heritage & Culture",price:300},
      {name:"Lamayuru–Alchi Trek",description:"Arrive at Alchi on foot via the 2-day trek over Prinkiti La and Konske La — walk through remote villages and arrive at the ancient monastery with a true sense of discovery.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",duration:"2 days",category:"Trekking",price:4000},
      {name:"Indus River Picnic & Wild Swim",description:"Follow the footpath from the monastery down to the Indus — glacial but the emerald green pools are irresistible on a hot Ladakhi afternoon.",image:"https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&q=80",duration:"2 – 3 hours",category:"Leisure",price:0}
    ],
    hotels:[
      {name:"The Alchi Resort",description:"The best accommodation in Alchi — comfortable rooms in a garden with Indus views, a rooftop restaurant, and the monastery a 5-minute walk away.",image:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80",pricePerNight:3200,rating:4.6,stars:3,link:"https://www.booking.com",lat:34.2275,lng:77.1875},
      {name:"Alchi Kitchen Guesthouse",description:"A famous family-run guesthouse known for the best Ladakhi food in the region — legendary butter tea, tsampa porridge, and homemade apricot jam.",image:"https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&q=80",pricePerNight:1500,rating:4.7,stars:2,link:"https://www.booking.com",lat:34.2270,lng:77.1865}
    ],
    nearbyPlaces:[
      {name:"Leh",description:"Capital of Ladakh, 70 km east of Alchi.",image:"https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",distanceKm:70,slug:"leh",lat:34.1526,lng:77.5771},
      {name:"Lamayuru",description:"The moonland monastery village, 57 km west of Alchi.",image:"https://images.unsplash.com/photo-1531761535209-180857e963b9?w=600&q=80",distanceKm:57,slug:"lamayuru",lat:34.2986,lng:76.7756}
    ],
    reviews:[
      {author:"David A.",rating:5,comment:"The murals in the Sumtseg temple are staggering. 1,000 years old and more vibrant than most modern paintings. Every serious traveller in Ladakh must come here."},
      {author:"Rina M.",rating:4,comment:"Combine Alchi with Lamayuru and Likir in a single day. The Alchi Kitchen guesthouse deserves its legendary status."},
      {author:"Tom B.",rating:5,comment:"One of India's greatest cultural treasures completely off the tourist radar. The contrast with Leh is extreme — total peace and extraordinary art."}
    ]
  }
 
];

async function seed() {
  try {
    // Upsert each place by slug
    for (const place of jkData) {
      await City.findOneAndUpdate(
        { slug: place.slug },
        place,
        { upsert: true, new: true }
      );
      console.log(`✅ Seeded: ${place.name}`);
    }
    console.log("\n🎉 Jammu & Kashmir data seeded successfully!");
    mongoose.disconnect();
  } catch (err) {
    console.error("❌ Seed error:", err);
    mongoose.disconnect();
  }
}

seed();