module.exports = {
  getCountOfSteps: (r, c) =>
    2 * Math.max(Math.abs(r), Math.abs(c)) -
    (Math.abs(r) === Math.abs(c) ? 0 : 1),
};
