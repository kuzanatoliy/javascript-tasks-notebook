module.exports = {
  getNumberOfFloor: (number, count) => {
    if (number <= 2) {
      return 1;
    }
    return Math.ceil((number - 2) / count) + 1;
  },
};
