module.exports = {
  getDelay: (p, a, b, c) =>
    Math.min(
      a * Math.ceil(p / a) - p,
      b * Math.ceil(p / b) - p,
      c * Math.ceil(p / c) - p
    ),
};
