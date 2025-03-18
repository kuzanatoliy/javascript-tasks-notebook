module.exports = {
  getMaxValue: (arr) =>
    arr.length === 1 ? arr[0] : arr.reduce((a, b) => a + b - 1),
};
