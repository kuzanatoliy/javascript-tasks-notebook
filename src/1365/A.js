module.exports = {
  getWinner: (matrix) => {
    const l = [];
    const c = [];
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (matrix[j][jj] > 0) {
          l[j] = 1;
          c[jj] = 1;
        }
      }
    }
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < l.length; j++) {
      if (!l[j]) {
        sum1++;
      }
    }
    for (let j = 0; j < c.length; j++) {
      if (!c[j]) {
        sum2++;
      }
    }
    return Math.min(sum1, sum2) % 2 === 0 ? 'Vivek' : 'Ashish';
  },
};
