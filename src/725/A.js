module.exports = {
  getPositionCount: (map) => {
    let sum = 0;
    for (let j = 0; j < map.length && map[j] === '<'; j++) {
      sum++;
    }
    for (let j = map.length - 1; j >= 0 && map[j] === '>'; j--) {
      sum++;
    }
    return sum;
  },
};
