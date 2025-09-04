module.exports = {
  getSum: (arr) => arr.reduce((a, b) => a + (b || 1), 0),
};
