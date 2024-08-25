module.exports = {
  getCountOfMoves: (matrix) => {
    let count = 0;
    for (let j = 0; j < matrix.length - 1; j++) {
      if (matrix[j][matrix[j].length - 1] === 'R') {
        count++;
      }
    }
    for (let j = 0; j < matrix[0].length - 1; j++) {
      if (matrix[matrix.length - 1][j] === 'D') {
        count++;
      }
    }
    return count;
  },
};
