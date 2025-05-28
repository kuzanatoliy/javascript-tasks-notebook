module.exports = {
  getPermutation: (matrix) => {
    const ans = [];
    const numbers = 2 * matrix.length;
    let sum = (numbers * (numbers + 1)) / 2;

    for (let j = 0; j < matrix[0].length; j++) {
      sum -= matrix[0][j];
      ans.push(matrix[0][j]);
    }

    for (let j = 1; j < matrix[matrix.length - 1].length; j++) {
      sum -= matrix[j][matrix.length - 1];
      ans.push(matrix[j][matrix.length - 1]);
    }

    ans.unshift(sum);
    return ans;
  },
};
