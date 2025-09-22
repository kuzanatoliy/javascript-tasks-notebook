module.exports = {
  isItPossibleToReachTheEnd: (map, k) => {
    let max = 0;
    let c = 0;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '#') {
        c++;
        max = Math.max(c, max);
      } else {
        c = 0;
      }
    }
    return max < k ? 'YES' : 'NO';
  },
};
