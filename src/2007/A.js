module.exports = {
  getCountOfOperations: (a, b) => {
    let count = 0;
    if (a % 2 === 1) {
      count++;
    }
    if (b % 2 === 1) {
      count++;
    }
    return Math.floor(((b - a - count) / 2 + count) / 2);
  },
};
