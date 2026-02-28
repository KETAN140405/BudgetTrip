// const mongoose = require("mongoose");

// const placeSchema = new mongoose.Schema({
//   name: { type: String, required: true, index: true },
//   slug: { type: String, unique: true },
//   state: String,
//   description: String,
//   type: String, // beach, hill, heritage
//   avgCostPerDay: Number,
//   rating: { type: Number, default: 4.5 },

//   images: [String],

//   highlights: [String],

//   location: {
//     lat: Number,
//     lng: Number
//   }

// }, { timestamps: true });

// placeSchema.index({ name: "text", description: "text" });

// module.exports = mongoose.model("Place", placeSchema);


async function generateCities() {
  const budget = document.getElementById("budget").value;

  try {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ budget })
    });

    const cities = await response.json();

    const container = document.getElementById("card-container");
    container.innerHTML = "";

    if (cities.length === 0) {
      container.innerHTML = "<h2>No cities found</h2>";
      return;
    }

    cities.forEach(city => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
        <img src="${city.mainImage}" alt="${city.name}">
        <h3>${city.name}</h3>
        <p>₹${city.avgCostPerDay} / day</p>
      `;

      card.onclick = () => {
        window.location.href = `place.html?slug=${city.slug}`;
      };

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Error:", err);
  }
}



// const slug = window.location.pathname.split("/").pop();

// fetch(`/api/place/${slug}`)
//   .then(res => res.json())
//   .then(data => {

//     const container = document.getElementById("place-container");

//     container.innerHTML = `
//       <div class="hero">
//         <img src="${data.mainImage}" class="hero-img"/>
//         <div class="hero-overlay">
//           <h1>${data.name}</h1>
//           <p>${data.state}</p>
//         </div>
//       </div>

//       <div class="info-section">
//         <h2>About ${data.name}</h2>
//         <p>${data.description}</p>

//         <div class="stats">
//           <div>💰 Avg Cost: ₹${data.avgCostPerDay}</div>
//           <div>⭐ Rating: ${data.rating}</div>
//           <div>🏷 Type: ${data.type}</div>
//         </div>
//       </div>

//       <div class="attractions">
//         <h2>Top Attractions</h2>
//         <div class="attraction-grid">
//           ${data.attractions.map(attr => `
//             <div class="attraction-card">
//               <img src="${attr.image}" />
//               <h3>${attr.name}</h3>
//               <p>${attr.description}</p>
//             </div>
//           `).join("")}
//         </div>
//       </div>
//     `;
//   });