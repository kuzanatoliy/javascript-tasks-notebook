module.exports = {
  getCountOfWinCells: (matrix) => {
    const rows = new Array(matrix.length).fill(0);
    const cols = [...rows];
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        rows[j] += matrix[j][jj];
        cols[jj] += matrix[j][jj];
      }
    }
    let count = 0;
    for (let jjj = 0; jjj < matrix.length; jjj++) {
      for (let jjjj = 0; jjjj < matrix[jjj].length; jjjj++) {
        count += cols[jjjj] > rows[jjj];
      }
    }
    return count;
  },
};
