module.exports = {
  getMaxLength: (a, b, c) =>
    2 * c + 2 * Math.min(a, b) + Math.min(Math.abs(a - b), 1),
};
