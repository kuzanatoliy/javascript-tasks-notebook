module.exports = {
  getCountOfTowers: (num, m, d) => Math.ceil(num / (Math.floor(d / m) + 1)),
};
