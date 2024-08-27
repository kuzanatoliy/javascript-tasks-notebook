module.exports = {
  getWinner: (matrix) => {
    for (let j = 0; j < 3; j++) {
      if (
        matrix[j][0] !== '.' &&
        matrix[j][0] === matrix[j][1] &&
        matrix[j][0] === matrix[j][2]
      ) {
        return matrix[j][0];
      }
    }
    for (let jj = 0; jj < 3; jj++) {
      if (
        matrix[0][jj] !== '.' &&
        matrix[0][jj] === matrix[1][jj] &&
        matrix[0][jj] === matrix[2][jj]
      ) {
        return matrix[0][jj];
      }
    }
    if (
      matrix[0][0] !== '.' &&
      matrix[0][0] === matrix[1][1] &&
      matrix[0][0] === matrix[2][2]
    ) {
      return matrix[1][1];
    }
    if (
      matrix[0][2] !== '.' &&
      matrix[0][2] === matrix[1][1] &&
      matrix[2][0] === matrix[1][1]
    ) {
      return matrix[1][1];
    }
    return 'DRAW';
  },
};
