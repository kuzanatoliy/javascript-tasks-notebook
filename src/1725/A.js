module.exports = {
  getCountOfDominoes: (num, m) => (m === 1 ? (num - 1) * m : num * (m - 1)),
};
