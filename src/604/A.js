const SCORES = [500, 1000, 1500, 2000, 2500];
module.exports = {
  getResultScore: (m, w, h) =>
    Math.floor(
      SCORES.map((item, index) =>
        Math.max(item * 0.3, (1 - m[index] / 250) * item - 50 * w[index])
      ).reduce((a, b) => a + b, 0) +
        100 * h[0] -
        50 * h[1]
    ),
};
