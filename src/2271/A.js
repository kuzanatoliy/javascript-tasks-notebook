module.exports = {
  getStepsCount: (x, y) => {
    if (y - x > 1) {
      return -1;
    }
    return x + (Math.abs(x - y) % 2);
  },
};
