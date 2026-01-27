module.exports = {
  getMaxSum: (matrix) => {
    let count = 0;
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        const d = Math.abs(matrix[j][jj]);
        sum += d;
        if (matrix[j][jj] <= 0) {
          min = Math.min(min, d);
          count++;
        }
      }
    }
    return count % 2 ? sum - 2 * min : sum;
  },
};
