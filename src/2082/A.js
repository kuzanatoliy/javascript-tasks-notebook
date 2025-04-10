module.exports = {
  getCountOfElems: (matrix) => {
    let c1 = 0;
    const fls = new Array(matrix[0].length).fill(0);
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        fls[jj] ^= matrix[j][jj];
      }
      c1 += matrix[j].reduce((a, b) => a ^ b, 0);
    }
    return Math.max(
      c1,
      fls.reduce((a, b) => a + b, 0)
    );
  },
};
