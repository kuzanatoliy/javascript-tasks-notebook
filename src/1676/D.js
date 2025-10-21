module.exports = {
  getMaxSum: (matrix) => {
    const temp1 = new Array(matrix.length + matrix[0].length).fill(0);
    const temp2 = [...temp1];
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        temp1[j + jj] += matrix[j][jj];
        temp2[matrix.length - j + jj] += matrix[j][jj];
      }
    }
    let max = 0;
    for (let s = 0; s < matrix.length; s++) {
      for (let ss = 0; ss < matrix[s].length; ss++) {
        const d = temp1[s + ss] + temp2[matrix.length - s + ss] - matrix[s][ss];
        if (d > max) {
          max = d;
        }
      }
    }
    return max;
  },
};
