module.exports = {
  getMaxDiff: (num) => {
    if (num === 2 || num === 3) {
      return num;
    }
    return num % 2 ? 1 : 0;
  },
};
