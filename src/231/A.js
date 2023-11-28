module.exports = {
  checkTasksCount: (matrix) => {
    let count = 0;
    const findCallback = (item) => item === 1;
    for (let i = 0; i < matrix.length; i++) {
      const firstEl = matrix[i].findIndex(findCallback);
      const lastEl = matrix[i].findLastIndex(findCallback);
      if (firstEl >= 0 && lastEl >= 0 && firstEl !== lastEl) {
        count++;
      }
    }
    return count;
  },
};
