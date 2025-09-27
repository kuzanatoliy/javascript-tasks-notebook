module.exports = {
  getCountOfOperations: (a, b) => {
    if (a === b) {
      return 0;
    } else if (Math.max(a, b) % Math.min(a, b) === 0) {
      return 1;
    } else {
      return 2;
    }
  },
};
