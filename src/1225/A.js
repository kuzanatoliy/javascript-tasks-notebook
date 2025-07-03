module.exports = {
  reconstructNumber: (a, b) => {
    if (a === 9 && b === 1) {
      return [9, 10];
    }
    if (a === b) {
      return [a * 10, b * 10 + 1];
    }
    if (b - a === 1) {
      return [a * 10 + 9, b * 10];
    }
    return [-1];
  },
};
