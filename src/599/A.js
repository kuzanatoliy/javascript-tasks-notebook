module.exports = {
  getDistance: (a, b, c) =>
    Math.min(a + b + c, 2 * a + 2 * b, 2 * a + 2 * c, 2 * b + 2 * c),
};
