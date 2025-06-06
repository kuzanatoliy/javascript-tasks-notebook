/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
module.exports = {
  isPatterExisted: (map) => {
    let ca = 0;
    let cb = 0;
    let cc = 0;
    for (let j = 0; j < map.length; j++) {
      ca += map[j] === 'A';
      cb += map[j] === 'B';
      cc += map[j] === 'C';
    }
    if (ca === cb + cc) {
      let f = 0;
      for (let jj = 0; jj < map.length; jj++) {
        if (map[jj] === 'A') {
          f++;
        } else {
          f--;
        }
        if (f < 0) {
          break;
        }
      }
      if (!f) {
        return 'YES';
      }
      f = 0;
      for (let jj = 0; jj < map.length; jj++) {
        if (map[jj] !== 'A') {
          f++;
        } else {
          f--;
        }
        if (f < 0) {
          break;
        }
      }
      if (!f) {
        return 'YES';
      }
    }
    if (cb === ca + cc) {
      let s = 0;
      for (let jjj = 0; jjj < map.length; jjj++) {
        if (map[jjj] === 'B') {
          s++;
        } else {
          s--;
        }
        if (s < 0) {
          break;
        }
      }
      if (!s) {
        return 'YES';
      }
      s = 0;
      for (let jjj = 0; jjj < map.length; jjj++) {
        if (map[jjj] !== 'B') {
          s++;
        } else {
          s--;
        }
        if (s < 0) {
          break;
        }
      }
      if (!s) {
        return 'YES';
      }
    }
    if (cc === ca + cb) {
      let t = 0;
      for (let jjjj = 0; jjjj < map.length; jjjj++) {
        if (map[jjjj] === 'C') {
          t++;
        } else {
          t--;
        }
        if (t < 0) {
          break;
        }
      }
      if (!t) {
        return 'YES';
      }
      t = 0;
      for (let jjjj = 0; jjjj < map.length; jjjj++) {
        if (map[jjjj] !== 'C') {
          t++;
        } else {
          t--;
        }
        if (t < 0) {
          break;
        }
      }
      if (!t) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
