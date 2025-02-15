module.exports = {
  getMatrix: (num, k) => {
    const matrix = [new Array(num).fill(0)];
    matrix[0][0] = k;
    for (let j = 1; j < num; j++) {
      matrix.push(new Array(num).fill(0));
      matrix[j][j] = k;
    }
    return matrix;
  },
};
