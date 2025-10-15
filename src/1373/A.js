module.exports = {
  getCounts: (a, b, c) => [a < c ? 1 : -1, a * b <= c ? -1 : b],
};
