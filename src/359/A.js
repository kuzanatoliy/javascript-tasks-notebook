module.exports = {
  getOperationCount: (matrix) => {
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][0] || matrix[j][matrix[j].length - 1]) {
        return 2;
      }
    }
    for (let jj = 0; jj < matrix[0].length; jj++) {
      if (matrix[0][jj] || matrix[matrix.length - 1][jj]) {
        return 2;
      }
    }
    return 4;
  },
};
