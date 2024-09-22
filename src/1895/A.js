module.exports = {
  getCountOfSteps: (x, y, k) => {
    if (x >= y) {
      return x;
    }
    if (y - x <= k) {
      return y;
    }
    return y + y - x - k;
  },
};
