module.exports = {
  isItPossibleToFix: (road, p) => {
    const map = { D: 0, L: 0, R: 0, U: 0 };
    for (let j = 0; j < road.length; j++) {
      map[road[j]]++;
    }
    return p[1] >= 0 - map.D &&
      p[1] <= map.U &&
      p[0] >= 0 - map.L &&
      p[0] <= map.R
      ? 'YES'
      : 'NO';
  },
};
