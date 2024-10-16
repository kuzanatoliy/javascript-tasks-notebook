/* eslint-disable prefer-destructuring */
module.exports = {
  getCountOfTurns: (map) => {
    let res = map[0];
    let count = 0;
    for (let j = 1; j < map.length; j++) {
      if (map[j] !== map[j - 1]) {
        res += map[j];
        continue;
      }
      count++;
      if (map[j] === 'R') {
        res += map[j + 1] === 'G' ? 'B' : 'G';
      } else if (map[j] === 'G') {
        res += map[j + 1] === 'B' ? 'R' : 'B';
      } else {
        res += map[j + 1] === 'R' ? 'G' : 'R';
      }
      j++;
      res += map[j] || '';
    }
    return [count, res];
  },
};
