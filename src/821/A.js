/* eslint-disable max-depth */
module.exports = {
  isGoodLab: (matrix) => {
    const n = matrix.length;
    for (let j = 0; j < n; j++) {
      for (let jj = 0; jj < n; jj++) {
        if (matrix[j][jj] === 1) {
          continue;
        }
        const sums = [];
        for (let jjj = 0; jjj < n; jjj++) {
          for (let jjjj = 0; jjjj < n; jjjj++) {
            sums.push(matrix[j][jjj] + matrix[jjjj][jj]);
          }
        }
        if (!sums.find((item) => item === matrix[j][jj])) {
          return 'NO';
        }
      }
    }
    return 'YES';
  },
};
