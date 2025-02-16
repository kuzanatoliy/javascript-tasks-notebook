module.exports = {
  getMaxValue: (arr) =>
    arr.map((item) => Math.abs(item)).reduce((a, b) => a + b, 0),
};
