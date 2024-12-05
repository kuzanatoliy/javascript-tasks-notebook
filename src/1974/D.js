/* eslint-disable max-lines-per-function */
/* eslint-disable sort-keys */
/* eslint-disable complexity */
module.exports = {
  getMovementMap: (map) => {
    if (map.length === 2 && map[0] !== map[1]) {
      return 'NO';
    }
    let cx = 0;
    let cy = 0;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === 'N') {
        cy++;
      } else if (map[j] === 'S') {
        cy--;
      } else if (map[j] === 'E') {
        cx++;
      } else if (map[j] === 'W') {
        cx--;
      }
    }
    if (cx % 2 !== 0 || cy % 2 !== 0) {
      return 'NO';
    }
    cx /= 2;
    cy /= 2;
    let res = '';
    if (cx === 0 && cy === 0) {
      const fl = {
        N: 0,
        S: 0,
        E: 0,
        W: 0,
      };
      for (let jjj = 0; jjj < map.length; jjj++) {
        if (map[jjj] === 'N') {
          res += fl.N ? 'R' : 'H';
          fl.N++;
          continue;
        }
        if (map[jjj] === 'S') {
          res += fl.S ? 'R' : 'H';
          fl.S++;
          continue;
        }
        if (map[jjj] === 'E') {
          res += !fl.E ? 'R' : 'H';
          fl.E++;
          continue;
        }
        if (map[jjj] === 'W') {
          res += !fl.W ? 'R' : 'H';
          fl.W++;
          continue;
        }
        res += 'R';
      }
      return res;
    }
    for (let jj = 0; jj < map.length; jj++) {
      if (map[jj] === 'N' && cy > 0) {
        cy--;
        res += 'R';
        continue;
      }
      if (map[jj] === 'S' && cy < 0) {
        cy++;
        res += 'R';
        continue;
      }
      if (map[jj] === 'E' && cx > 0) {
        cx--;
        res += 'R';
        continue;
      }
      if (map[jj] === 'W' && cx < 0) {
        cx++;
        res += 'R';
        continue;
      }
      res += 'H';
    }
    return res;
  },
};
