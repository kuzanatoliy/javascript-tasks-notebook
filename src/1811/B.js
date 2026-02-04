module.exports = {
  getMinRequiredPower: (num, x1, y1, x2, y2) => {
    const d1 = Math.min(Math.min(y1 - 1, num - y1), Math.min(x1 - 1, num - x1));
    const d2 = Math.min(Math.min(x2 - 1, num - x2), Math.min(y2 - 1, num - y2));
    return Math.abs(d1 - d2);
  },
};
