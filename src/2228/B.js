module.exports = {
  getStepsCount: (num, x1, x2, k) => {
    if (num < 4) {
      return 1;
    }
    return (
      Math.min(
        Math.abs(x1 - x2),
        Math.abs(x1 + num - x2),
        Math.abs(x2 + num - x1)
      ) + k
    );
  },
};
