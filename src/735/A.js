module.exports = {
  isItPossibleToTouch: (map, k) => {
    let s = 0;
    while (s < map.length && map[s] !== 'G' && map[s] !== 'T') {
      s++;
    }
    for (let j = s + k; j < map.length; j += k) {
      if (map[j] === '#') {
        return 'NO';
      }
      if (map[j] === 'G' || map[j] === 'T') {
        return 'YES';
      }
    }
    return 'NO';
  },
};
