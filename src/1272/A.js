module.exports = {
  getMinDistance: (a, b, c) =>
    Math.max(0, Math.abs(a - b) + Math.abs(b - c) + Math.abs(c - a) - 4),
};
