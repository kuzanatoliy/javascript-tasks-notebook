module.exports = {
  getMap: (rows, cols) => {
    const map = [];
    for (let j = 0; j < rows; j++) {
      map.push(new Array(cols).fill(0));
    }
    for (let jj = 0; jj < cols; jj += 2) {
      map[0][jj] = 1;
      map[rows - 1][jj] = 1;
    }
    for (let jjj = 2; jjj < rows - 2; jjj += 2) {
      map[jjj][0] = 1;
      map[jjj][cols - 1] = 1;
    }
    return map;
  },
};
