module.exports = {
  checkCountOfStepsToCreateBeautifulMatrix: (matrix) => {
    let count = 0;
    const findCallback = (item) => item === 1;
    for (let i = 0; i < matrix.length; i++) {
      let el = matrix[i].findIndex(findCallback);
      if (el < 0) {
        continue;
      }
      el = el / 2 + 1;
      return i < 3 ? 3 - i : i - 3 + j < 3 ? 3 - j : j - 3;
    }
    return count;
  },
};
