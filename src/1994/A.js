/* eslint-disable prefer-destructuring */
module.exports = {
  getTurnedMatrix: (matrix) => {
    const tm = [];
    for (let j = 0; j < matrix.length; j++) {
      tm.push([matrix[j][matrix[j].length - 1]]);
      for (let jj = 1; jj < matrix[j].length; jj++) {
        tm[j].push(matrix[j][jj - 1]);
      }
    }
    return tm.length === 1 && tm[0].length === 1
      ? -1
      : [tm[tm.length - 1], ...tm.slice(0, tm.length - 1)];
  },
};
