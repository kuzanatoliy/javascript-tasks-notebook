module.exports = {
  getSumOfGoodElements: (matrix) => {
    let sum = 0;
    const d = (matrix.length - 1) / 2;
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[j][j];
      matrix[j][j] = 0;
      sum += matrix[j][matrix.length - j - 1];
      matrix[j][matrix.length - j - 1] = 0;
      sum += matrix[d][j];
      matrix[d][j] = 0;
      sum += matrix[j][d];
      matrix[j][d] = 0;
    }
    return sum;
  },
};
