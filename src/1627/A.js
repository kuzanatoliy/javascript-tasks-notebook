module.exports = {
  getCountOfOperations: (matrix, r, c) => {
    if (matrix[r - 1][c - 1] === 'B') {
      return 0;
    }
    const rows = new Array(matrix.length).fill(0);
    const columns = new Array(matrix[0].length).fill(0);
    let count = 0;
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (matrix[j][jj] === 'B') {
          rows[j]++;
          columns[jj]++;
          count++;
        }
      }
    }
    if (count === 0) {
      return -1;
    }
    if (rows[r - 1] > 0 || columns[c - 1] > 0) {
      return 1;
    }
    return 2;
  },
};
