module.exports = {
  getCountOfCrosses: (matrix) => {
    let count = 0;
    for (let j = 2; j < matrix.length; j++) {
      for (let jj = 2; jj < matrix[j].length; jj++) {
        if (
          matrix[j - 2][jj - 2] === 'X' &&
          matrix[j - 2][jj] === 'X' &&
          matrix[j][jj - 2] === 'X' &&
          matrix[j][jj] === 'X' &&
          matrix[j - 1][jj - 1] === 'X'
        ) {
          count++;
        }
      }
    }
    return count;
  },
};
