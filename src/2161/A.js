module.exports = {
  getCountOfRounds: (r, x, d, map) => {
    let count = 0;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '2' && r >= x) {
        continue;
      }
      r -= d;
      count++;
    }
    return count;
  },
};
