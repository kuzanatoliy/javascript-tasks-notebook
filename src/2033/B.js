module.exports = {
  getCountOfOpertions: (matrix) => {
    const arr = new Array(matrix.length * 2 - 1).fill(0);
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j += 1) {
        arr[matrix.length + i - j - 1] = Math.max(
          arr[matrix.length + i - j - 1],
          -matrix[i][j]
        );
      }
    }
    let ans = 0;
    for (let ii = 0; ii < arr.length; ii++) {
      ans += arr[ii];
    }
    return ans;
  },
};
