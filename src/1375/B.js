module.exports = {
  isItPossibleToGetGoodGrid: (grid) => {
    for (let j = 0; j < grid.length; j++) {
      for (let jj = 0; jj < grid[j].length; jj++) {
        let d = 4;
        if (j === 0 || j === grid.length - 1) {
          d--;
        }
        if (jj === 0 || jj === grid[j].length - 1) {
          d--;
        }
        if (grid[j][jj] > d) {
          return ['NO'];
        }
        grid[j][jj] = d;
      }
    }

    return ['YES', grid];
  },
};
