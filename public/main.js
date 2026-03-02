async function loadTrending() {
  const search = document.getElementById("searchTrending")?.value || "";

  try {
    const res = await fetch(`/api/trending?search=${search}`);
    const cities = await res.json();

    const grid = document.getElementById("main-dest-grid");
    grid.innerHTML = "";

    if (!cities.length) {
      grid.innerHTML = "<p>No destinations found.</p>";
      return;
    }

    cities.forEach(city => {
      const card = document.createElement("div");
      card.className = "card trending-card";

      // card.innerHTML = `
      //   <div class="card-img">
      //     <img src="${city.mainImage}" alt="${city.name}">
      //   </div>

      //   <div class="card-body">
      //     <h3>${city.name}</h3>
      //     <p>${city.state}</p>

      //     <div class="card-meta">
      //       <span>⭐ ${city.rating}</span>
      //       <span>₹${city.avgCostPerDay}/day</span>
      //     </div>

      //     <button class="view-btn">View Details</button>
      //   </div>
      // `;
      card.innerHTML = `
  <div class="travel-card" onclick="openPlace('${city.slug}')">
    
    <div class="card-image">
      <img src="${city.mainImage}" >
      
      <div class="card-badge">
        🌴 ${city.type || "Destination"}
      </div>

      <div class="card-fav">❤</div>
    </div>

    <div class="card-content">
      
      <div class="card-header">
        <h3>${city.name}</h3>
        <div class="price">
          ₹${city.avgCostPerDay}
          <span>per day</span>
        </div>
      </div>

      <p class="card-desc">
        ${city.description || ""}
      </p>

      <div class="card-tags">
        ${(city.highlights || []).map(tag => 
          `<span>${tag}</span>`
        ).join("")}
      </div>

     

      <button class="view-btn">View Details →</button>

    </div>
  </div>
`;

      card.onclick = () => {
        window.location.href = `/place/${city.slug}`;
      };

      grid.appendChild(card);
    });

  } catch (err) {
    console.error("Trending Load Error:", err);
  }
}

document.addEventListener("DOMContentLoaded", loadTrending);