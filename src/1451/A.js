module.exports = {
  getCountOfOperations: (num) => {
    if (num <= 3) {
      return num - 1;
    }
    return num % 2 === 0 ? 2 : 3;
  },
};
