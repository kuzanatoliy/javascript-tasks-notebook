module.exports = {
  getPair: (x, y) => (y % x === 0 ? [1, y / x] : [0, 0]),
};
