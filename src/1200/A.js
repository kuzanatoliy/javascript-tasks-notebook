/* eslint-disable max-depth */
module.exports = {
  getState: (map) => {
    const res = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < map.length; j++) {
      if (map[j] === 'L') {
        for (let jj = 0; jj < res.length; jj++) {
          if (res[jj] === 0) {
            res[jj] = 1;
            break;
          }
        }
        continue;
      }
      if (map[j] === 'R') {
        for (let jj = 9; jj >= 0; jj--) {
          if (res[jj] === 0) {
            res[jj] = 1;
            break;
          }
        }
        continue;
      }
      res[+map[j]] = 0;
    }
    return res.join('');
  },
};
