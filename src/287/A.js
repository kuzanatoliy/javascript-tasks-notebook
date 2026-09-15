module.exports = {
  isItPossibleToTransform: (matrix) => {
    for (let j = 1; j < 4; j++) {
      for (let jj = 1; jj < 4; jj++) {
        if (
          (matrix[j - 1][jj - 1] === '#') +
            (matrix[j - 1][jj] === '#') +
            (matrix[j][jj - 1] === '#') +
            (matrix[j][jj] === '#') !==
          2
        ) {
          return 'YES';
        }
      }
    }
    return 'NO';
  },
};
