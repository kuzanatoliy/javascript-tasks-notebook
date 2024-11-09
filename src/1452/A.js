module.exports = {
  getCountOfSteps: (x, y) => (x === y ? x + y : Math.max(x, y) * 2 - 1),
};
