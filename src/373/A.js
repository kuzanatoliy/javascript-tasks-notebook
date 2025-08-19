module.exports = {
  isItPossibleToClick: (map, k) => {
    k *= 2;
    const counts = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let j = 0; j < map.length; j++) {
      for (let jj = 0; jj < map[j].length; jj++) {
        if (map[j][jj] !== '.') {
          counts[map[j][jj]]++;
        }
      }
    }
    for (let jjj = 0; jjj < counts.length; jjj++) {
      if (counts[jjj] > k) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
