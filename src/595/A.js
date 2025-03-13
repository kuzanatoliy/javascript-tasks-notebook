module.exports = {
  getCountOfFlats: (matrix) => {
    let count = 0;
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj += 2) {
        count += matrix[j][jj] | matrix[j][jj + 1];
      }
    }
    return count;
  },
};
