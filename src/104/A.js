module.exports = {
  getCountOfPossibleWays: (num) => {
    const d = num - 10;
    if (d <= 0 || d > 11) {
      return 0;
    }
    if (d === 10) {
      return 15;
    }
    return 4;
  },
};
