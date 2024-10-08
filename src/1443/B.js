module.exports = {
  getCountOfCoins: (map, a, b) => {
    let l = 0;
    while (l < map.length && map[l] === '0') {
      l++;
    }
    if (l === map.length) {
      return 0;
    }
    let count = 0;
    let coins = a;
    for (let j = l + 1; j < map.length; j++) {
      if (map[j] === '0') {
        count++;
        continue;
      }
      if (count && map[j] === '1') {
        coins += Math.min(a, b * count);
        count = 0;
      }
    }
    return coins;
  },
};
