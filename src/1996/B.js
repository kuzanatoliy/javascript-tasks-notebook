module.exports = {
  transformMatrix: (matrix, k) => {
    const res = [];
    for (let j = 0, kk = 0; j < matrix.length; j += k, kk++) {
      res.push([]);
      for (let jj = 0; jj < matrix[j].length; jj += k) {
        res[kk].push(matrix[j][jj]);
      }
    }
    return res;
  },
};
