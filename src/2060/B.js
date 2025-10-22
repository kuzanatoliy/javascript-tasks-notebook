module.exports = {
  getOrder: (matrix) => {
    const temp = [];
    for (let j = 0; j < matrix.length; j++) {
      const d = matrix[j][0] % matrix.length;
      for (let jj = 1; jj < matrix[j].length; jj++) {
        if (d !== matrix[j][jj] % matrix.length) {
          return [-1];
        }
      }
      temp.push(d);
    }
    return temp
      .map((item, ind) => [item, ind])
      .sort((a, b) => a[0] - b[0])
      .map((item) => item[1] + 1);
  },
};
