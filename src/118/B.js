module.exports = {
  buildMatrix: (num) => {
    const matrix = [];
    const d = num * 2 + 1;
    for (let j = 0; j <= num; j++) {
      const temp = new Array(num + 1).fill(' ');
      for (let jj = 0; jj <= j; jj++) {
        temp[num - jj] = j - jj;
        temp[num + jj] = j - jj;
      }
      matrix[j] = [...temp];
      matrix[d - j - 1] = [...temp];
    }
    return matrix;
  },
};
