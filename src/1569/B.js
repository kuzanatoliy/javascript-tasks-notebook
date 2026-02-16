/* eslint-disable max-depth */
module.exports = {
  isItPossibleToMeetWishes: (map) => {
    const res = [];
    for (let j = 0; j < map.length; j++) {
      res.push(new Array(map.length).fill('X'));
    }
    const fls = new Array(map.length).fill(0);
    for (let jj = 0; jj < map.length; jj++) {
      for (let jjj = jj + 1; jjj < map.length; jjj++) {
        if (map[jj] === '1' && map[jjj] === '1') {
          res[jj][jjj] = '=';
          res[jjj][jj] = '=';
          fls[jj]++;
          fls[jjj]++;
        } else if (map[jj] === '2' && map[jjj] === '2') {
          if (fls[jj]) {
            res[jj][jjj] = '-';
            res[jjj][jj] = '+';
            fls[jjj]++;
          } else {
            res[jj][jjj] = '+';
            res[jjj][jj] = '-';
            fls[jj]++;
          }
        } else if (map[jj] > map[jjj]) {
          res[jj][jjj] = '-';
          res[jjj][jj] = '+';
          fls[jjj]++;
        } else {
          res[jj][jjj] = '+';
          res[jjj][jj] = '-';
          fls[jj]++;
        }
      }
    }
    let c = 0;
    for (let f = 0; f < fls.length; f++) {
      c += fls[f] > 0;
    }
    return c === fls.length ? ['YES', res] : ['NO'];
  },
};
