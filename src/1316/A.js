module.exports = {
  getMaxScore: (arr, m) =>
    Math.min(
      m,
      arr.reduce((a, b) => a + b, 0)
    ),
};
