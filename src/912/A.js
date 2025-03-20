module.exports = {
  getCountOfCrystals: (A, B, x, y, z) =>
    Math.abs(Math.min(A - 2 * x - y, 0) + Math.min(B - 3 * z - y, 0)),
};
