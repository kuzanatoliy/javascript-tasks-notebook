module.exports = {
  getLastPaint: (matrix) => {
    for (let j = 0; j < matrix.length; j++) {
      let jj = 0;
      while (jj < matrix[j].length && matrix[j][jj] === 'R') {
        jj++;
      }
      if (jj === matrix[j].length) {
        return 'R';
      }
    }
    return 'B';
  },
};
