module.exports = {
  getMaxCountOfCoins: (a, b) => {
    if (a >= b) {
      return a;
    }
    const d = b - a;
    return d < a ? a - d : 0;
  },
};
