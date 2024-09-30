module.exports = {
  getCountOfOperations: (x, y) => {
    if (x === 0 && y === 0) {
      return 0;
    }
    if (Number.isInteger(Math.sqrt(x * x + y * y))) {
      return 1;
    }
    return 2;
  },
};
