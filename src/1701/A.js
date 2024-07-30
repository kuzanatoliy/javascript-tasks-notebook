module.exports = {
  getCountOfMoves: (matrix) => {
    const sum = matrix[0][0] + matrix[0][1] + matrix[1][0] + matrix[1][1];
    if (sum === 0) {
      return 0;
    }
    if (sum === 4) {
      return 2;
    }
    return 1;
  },
};
