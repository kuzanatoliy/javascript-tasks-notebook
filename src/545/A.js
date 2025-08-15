module.exports = {
  getWinners: (matrix) => {
    const fls = new Array(matrix.length).fill(0);
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (matrix[j][jj] === 1) {
          fls[j]++;
        }
        if (matrix[j][jj] === 2) {
          fls[jj]++;
        }
        if (matrix[j][jj] === 3) {
          fls[j]++;
          fls[jj]++;
        }
      }
    }
    const res = [];
    for (let jjj = 0; jjj < fls.length; jjj++) {
      if (fls[jjj] === 0) {
        res.push(jjj + 1);
      }
    }
    return res;
  },
};
