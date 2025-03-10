module.exports = {
  isMeetStandart: (matrix) => {
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 1; jj < matrix[j].length; jj++) {
        if (matrix[j][jj - 1] !== matrix[j][jj]) {
          return 'NO';
        }
      }
    }
    for (let k = 0; k < matrix[0].length; k++) {
      for (let kk = 1; kk < matrix.length; kk++) {
        if (matrix[kk - 1][k] === matrix[kk][k]) {
          return 'NO';
        }
      }
    }
    return 'YES';
  },
};
