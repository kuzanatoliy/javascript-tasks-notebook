module.exports = {
  getIsolatedCell: (row, col) => {
    if (row === 1 || col === 1) {
      return [1, 1];
    }
    if (row >= 4 || col >= 4) {
      return [row, col];
    }
    return [2, 2];
  },
};
