module.exports = {
  getCountOfSteps: (x, y) => {
    if (x < y) {
      return 2;
    } else if (y >= 2 && x - y >= 2) {
      return 3;
    } else {
      return -1;
    }
  },
};
