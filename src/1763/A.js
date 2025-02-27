module.exports = {
  getMaxPossibleValue: (arr) =>
    arr.reduce((a, b) => a | b) - arr.reduce((a, b) => a & b),
};
