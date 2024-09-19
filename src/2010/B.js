module.exports = {
  getWhoWasLate: (a, b) => {
    const sum = a + b;
    if (sum === 3) {
      return 3;
    }
    if (sum === 4) {
      return 2;
    }
    return 1;
  },
};
