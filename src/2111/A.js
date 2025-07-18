module.exports = {
  getCountOfSteps: (num) => {
    let x1 = 0;
    let x2 = 0;
    let x3 = 0;
    let count = 0;
    while (x1 < num || x2 < num || x3 < num) {
      if (x1 < num) {
        count++;
        x1 = 2 * x2 + 1;
      }
      if (x2 < num) {
        count++;
        x2 = 2 * x3 + 1;
      }
      if (x3 < num) {
        count++;
        x3 = 2 * x1 + 1;
      }
    }
    return count;
  },
};
