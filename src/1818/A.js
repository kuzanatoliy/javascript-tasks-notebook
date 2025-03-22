module.exports = {
  getMaxCountOfPlayers: (matrix) => {
    const arr = new Array(matrix.length).fill(0);
    for (let j = 0; j < matrix[0].length; j++) {
      for (let jj = 0; jj < arr.length; jj++) {
        arr[jj] += matrix[jj][j] === matrix[0][j];
      }
    }
    let count = 0;
    for (let jjj = 0; jjj < arr.length; jjj++) {
      count += arr[jjj] === matrix[0].length;
    }
    return count;
  },
};
