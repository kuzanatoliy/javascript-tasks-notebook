module.exports = {
  buildSquare: (num) => {
    const matrix = [new Array(num).fill(0)];
    matrix[0][0] = 1;
    matrix[0][1] = 1;
    for (let j = 1; j < num - 1; j++) {
      matrix.push(new Array(num).fill(0));
      matrix[j][j - 1] = 1;
      matrix[j][j] = 1;
      matrix[j][j + 1] = 1;
    }
    matrix.push(new Array(num).fill(0));
    matrix[num - 1][num - 2] = 1;
    matrix[num - 1][num - 1] = 1;
    return matrix;
  },
};
