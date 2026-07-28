module.exports = {
  getScore: (k, a, b, cities) => {
    const major = cities.slice(0, k);
    let cost = 0;
    if (a > k) {
      cost += major.reduce(
        (c, city) =>
          Math.min(
            c,
            Math.abs(city[0] - cities[a - 1][0]) +
              Math.abs(city[1] - cities[a - 1][1])
          ),
        Infinity
      );
    }
    if (b > k) {
      cost += major.reduce(
        (c, city) =>
          Math.min(
            c,
            Math.abs(city[0] - cities[b - 1][0]) +
              Math.abs(city[1] - cities[b - 1][1])
          ),
        Infinity
      );
    }
    cost = Math.min(
      cost,
      Math.abs(cities[a - 1][0] - cities[b - 1][0]) +
        Math.abs(cities[a - 1][1] - cities[b - 1][1])
    );
    return cost;
  },
};
