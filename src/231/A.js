module.exports = {
  checkTasksCount: (matrix) => {
    let count = 0;
    const findCallback = (item) => item === 1;
    for (let i = 0; i < matrix.length; i++) {
      let firstEl = matrix[i].findIndex(findCallback);
      let lastEl = matrix[i].findLastIndex(findCallback);
      if (firstEl >= 0 && lastEl >= 0 && firstEl !== lastEl) {
        count++;
      }
    }
    return count;
  },
};
