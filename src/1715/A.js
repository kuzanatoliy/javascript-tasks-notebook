module.exports = {
  getCountOfSteps: (rows, columns) => {
    if (rows === 1 && columns === 1) {
      return 0;
    }
    return rows < columns ? 2 * rows + columns - 2 : 2 * columns + rows - 2;
  },
};
