module.exports = {
  getMaxPossibleValue: (length, sum) => {
    switch (length) {
      case 1:
        return 0;
      case 2:
        return sum;
      default:
        return sum * 2;
    }
  },
};
