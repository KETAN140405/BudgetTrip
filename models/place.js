const slug = window.location.pathname.split("/").pop();

async function loadPlace() {
  try {
    const res = await fetch(`/api/place/${slug}`);
    const data = await res.json();

    if (!data) return;

    // Basic Info
    document.getElementById("city-name").innerText = data.name;
    document.getElementById("city-state").innerText = data.state;
    document.getElementById("city-description").innerText = data.description;
    document.getElementById("city-price").innerText = "₹" + data.avgCostPerDay + "/day";
    document.getElementById("city-rating").innerText = data.rating;
    document.getElementById("city-type").innerText = data.type;
    document.getElementById("city-image").src = data.mainImage;

    // Attractions Slider
    const slider = document.getElementById("attractionSlider");
    slider.innerHTML = "";

    data.attractions.forEach(a => {
      const card = document.createElement("div");
      card.className = "attraction-card";

      card.innerHTML = `
        <img src="${a.image || '/images/default.jpg'}">
        <h4>${a.name}</h4>
        <p>${a.description || ""}</p>
      `;

      slider.appendChild(card);
    });

  } catch (err) {
    console.error("Place Load Error:", err);
  }
}

function slideAttractions(direction) {
  const slider = document.getElementById("attractionSlider");
  const cardWidth = 280; // width of one card
  const visibleCards = 4;
  slider.scrollBy({
    left: direction * cardWidth * visibleCards,
    behavior: "smooth"
  });
}

document.addEventListener("DOMContentLoaded", loadPlace);