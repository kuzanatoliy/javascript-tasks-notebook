module.exports = {
  isItPossibleToTransform: (map) => {
    let oneone = false;
    let j = map.length;
    for (let i = 1; i < map.length && !oneone; i++) {
      if (map[i] === '1' && map[i - 1] === '1') {
        oneone = true;
        j = i;
      }
    }
    for (let k = j; k < map.length; k++) {
      if (map[k] === '0' && map[k - 1] === '0') {
        return 'NO';
      }
    }
    return 'YES';
  },
};
