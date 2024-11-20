module.exports = {
  getMinCountOfMatches: (num) => {
    if (num < 4) {
      return 4 - num;
    }
    return num % 2;
  },
};
