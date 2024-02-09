module.exports = {
  getHashTag: (matrix) => {
    for (let i = 0; i < matrix.length; i++) {
      for (let ii = 0; ii < matrix[i].length; ii++) {
        if (
          matrix[i][ii] !== 'B' &&
          matrix[i][ii] !== 'W' &&
          matrix[i][ii] !== 'G'
        ) {
          return '#Color';
        }
      }
    }

    return '#Black&White';
  },
};
