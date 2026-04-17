module.exports = {
  getOptimalCost: (matrix) =>
    Math.max(...matrix.map((item) => Math.min(...item))),
};
