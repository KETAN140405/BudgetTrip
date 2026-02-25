Score = BudgetMatch * 40
      + InterestMatch * 30
      + RatingScore * 20
      + PopularityScore * 10





      function rankDestinations(places, budget, interests) {
  return places.map(place => {

    let score = 0;

    // Budget Match
    if (place.avg_cost <= budget) score += 40;

    // Interest Match
    if (interests.some(i => place.tags.includes(i))) {
      score += 30;
    }

    // Rating
    score += (place.rating / 5) * 20;

    // Popularity
    score += Math.min(place.reviews / 1000, 10);

    return { ...place, score };
  })
  .sort((a, b) => b.score - a.score);
}

module.exports = { rankDestinations };