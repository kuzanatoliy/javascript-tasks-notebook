module.exports = {
  checkCountOfStepsToCreateBeautifulMatrix: (matrix) => {
    const findCallback = (item) => item === 1;
    for (let i = 0; i < matrix.length; i++) {
      let el = matrix[i].findIndex(findCallback);
      if (el < 0) {
        continue;
      }
      el = el / 2 + 1;
      return i < 3 ? 3 - i : i - 3 + el < 3 ? 3 - el : el - 3;
    }
    return 0;
  },
};
