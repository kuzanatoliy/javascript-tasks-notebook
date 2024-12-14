module.exports = {
  getMinAmountOfMoney: (num, a, b) =>
    2 * a > b ? b * Math.floor(num / 2) + a * (num % 2) : num * a,
};
