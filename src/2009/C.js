module.exports = {
  getCountOfSteps: (x, y, k) => {
    const dx = Math.ceil(x / k);
    const dy = Math.ceil(y / k);
    return dx > dy ? 2 * dx - 1 : 2 * dy;
  },
};
