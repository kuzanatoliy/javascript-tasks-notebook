module.exports = {
  getCountOfBanknotes: (a, b, c, arr) =>
    arr.filter((item) => item > b && item < c).length,
};
