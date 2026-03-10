module.exports = {
  isItTrue: (matrix) => {
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix.length; jj++) {
        if (
          (Number((matrix[j] || [])[jj - 1] === 'o') +
            Number((matrix[j] || [])[jj + 1] === 'o') +
            Number((matrix[j - 1] || [])[jj] === 'o') +
            Number((matrix[j + 1] || [])[jj] === 'o')) %
          2
        ) {
          return 'NO';
        }
      }
    }
    return 'YES';
  },
};
