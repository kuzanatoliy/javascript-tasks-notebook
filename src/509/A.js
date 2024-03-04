module.exports = {
  getMaxValueInTheTable: (n) => {
    const matrix = [[1]];
    let j = 0;
    let jj = 0;
    for (j = 1; j < n; j++) {
      matrix[0].push(1);
    }
    for (j = 1; j < n; j++) {
      matrix.push([1]);
      for (jj = 1; jj < n; jj++) {
        matrix[j][jj] = matrix[j - 1][jj] + matrix[j][jj - 1];
      }
    }
    return matrix[n - 1][n - 1];
  },
};
