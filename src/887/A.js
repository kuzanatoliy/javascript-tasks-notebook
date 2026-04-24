module.exports = {
  isItPossibleToTransform: (map) => {
    let j = 0;
    while (j < map.length && map[j] === '0') {
      j++;
    }
    let c = 0;
    j++;
    while (j < map.length) {
      c += map[j] === '0';
      j++;
    }
    return c < 6 ? 'NO' : 'YES';
  },
};
