module.exports = {
  getCountOfSteps: (x1, y1, x2, y2) => {
    const d1 = Math.abs(x1 - x2);
    const d2 = Math.abs(y1 - y2);
    return d1 + d2 + (d1 > 0 && d2 > 0 ? 2 : 0);
  },
};
