module.exports = {
  getMaxMoney: (array) =>
    (array.reduce((a, b) => a * b) + BigInt(array.length - 1)) * 2022n,
};
