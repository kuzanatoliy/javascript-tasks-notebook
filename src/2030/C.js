module.exports = {
  isAliceWinner: (map) => {
    if (map[0] === '1' || map[map.length - 1] === '1') {
      return 'YES';
    }
    for (let j = 2; j < map.length - 1; j++) {
      if (map[j] === '1' && map[j - 1] === '1') {
        return 'YES';
      }
    }
    return 'NO';
  },
};
