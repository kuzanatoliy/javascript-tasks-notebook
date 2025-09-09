module.exports = {
  getPosition: (map) => {
    let mid = 0;
    while (map[mid] !== '^') {
      mid++;
    }
    let sum = 0;
    for (let j = 0; j < map.length; j++) {
      if (map[j] !== '=' && map[j] !== '^') {
        sum += +map[j] * (mid - j);
      }
    }
    if (sum === 0) {
      return 'balance';
    }
    return sum > 0 ? 'left' : 'right';
  },
};
