module.exports = {
  getWinner: (map) => {
    if (map.length === 2) {
      return map[0] === 'A' ? 'Alice' : 'Bob';
    }
    if (map[map.length - 2] === map[map.length - 1]) {
      return map[map.length - 2] === 'A' ? 'Alice' : 'Bob';
    }
    if (
      (map[0] === 'B' && map[map.length - 1] === 'B') ||
      (map[0] === 'B' && map[map.length - 2] === 'B')
    ) {
      return 'Bob';
    }
    let count = 0;
    for (let j = 0; j < map.length; j++) {
      count += map[j] === 'A';
    }
    return map.length - count > 1 && map[map.length - 1] === 'B'
      ? 'Bob'
      : 'Alice';
  },
};
