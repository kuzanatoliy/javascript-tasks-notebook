module.exports = {
  getMatrix: (row, col) => {
    const matrix = new Array(row);
    const n1 = Math.floor(row / 2);
    let first = n1 * col + 1;
    for (let j = 0; j < row; j += 2) {
      matrix[j] = [];
      for (let jj = 0; jj < col; jj++) {
        matrix[j].push(first);
        first++;
      }
    }
    first = 1;
    for (let k = 1; k < row; k += 2) {
      matrix[k] = [];
      for (let kk = 0; kk < col; kk++) {
        matrix[k].push(first);
        first++;
      }
    }
    return matrix;
  },
};
