/* eslint-disable max-depth */
module.exports = {
  getCost: (x, y, matrix) => {
    y = Math.min(y, 2 * x);
    let cost = 0;
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (matrix[j][jj] === '.') {
          if (matrix[j][jj + 1] === '.') {
            jj++;
            cost += y;
          } else {
            cost += x;
          }
        }
      }
    }
    return cost;
  },
};
