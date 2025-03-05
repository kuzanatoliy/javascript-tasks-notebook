/* eslint-disable max-params */
module.exports = {
  getDistance: (w, d, h, a, b, f, g) =>
    h +
    Math.min(
      b + g + Math.abs(a - f),
      2 * d - b - g + Math.abs(a - f),
      a + f + Math.abs(b - g),
      2 * w - a - f + Math.abs(b - g)
    ),
};
