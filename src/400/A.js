module.exports = {
  getWinWariants: (map) => {
    const borders = [
      [1, 12],
      [2, 6],
      [3, 4],
      [4, 3],
      [6, 2],
      [12, 1],
    ];
    const res = [];
    for (let j = 0; j < borders.length; j++) {
      for (let jj = 0; jj < borders[j][1]; jj++) {
        let sum = 0;
        for (let jjj = jj; jjj < map.length; jjj += borders[j][1]) {
          sum += map[jjj] === 'X';
        }
        if (sum === borders[j][0]) {
          res.push(`${borders[j][0]}x${borders[j][1]}`);
          break;
        }
      }
    }
    return res;
  },
};
