module.exports = {
  isItPossibleToTransform: (matrix) => {
    for (let j = 1; j < matrix.length - 1; j++) {
      for (let jj = 1; jj < matrix[j].length - 1; jj++) {
        if (
          matrix[j - 1][jj] === '.' &&
          matrix[j + 1][jj] === '.' &&
          matrix[j][jj - 1] === '.' &&
          matrix[j][jj + 1] === '.' &&
          matrix[j][jj] === '.'
        ) {
          matrix[j - 1][jj] = '#';
          matrix[j + 1][jj] = '#';
          matrix[j][jj - 1] = '#';
          matrix[j][jj + 1] = '#';
          matrix[j][jj] = '#';
        }
      }
    }
    for (let jjj = 0; jjj < matrix.length; jjj++) {
      for (let jjjj = 0; jjjj < matrix[jjj].length; jjjj++) {
        if (matrix[jjj][jjjj] === '.') {
          return 'NO';
        }
      }
    }
    return 'YES';
  },
};
