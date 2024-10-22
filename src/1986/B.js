/* eslint-disable sort-vars */
module.exports = {
  transformMatrix: (matrix) => {
    const ans = [];
    const num = matrix.length + matrix[0].length - 1;
    for (let j = 0; j < num; j++) {
      for (let r = 0, c = j; r <= j && c >= 0; r++, c--) {
        const temp = Math.max(
          (matrix[r - 1] || ans)[c] || 0,
          (matrix[r + 1] || ans)[c] || 0,
          (matrix[r] || ans)[c - 1] || 0,
          (matrix[r] || ans)[c + 1] || 0
        );
        if (matrix[r] && matrix[r][c] && matrix[r][c] > temp) {
          matrix[r][c] = temp;
        }
      }
    }
    return matrix;
  },
};
