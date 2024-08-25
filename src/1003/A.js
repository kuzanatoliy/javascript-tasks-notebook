module.exports = {
  getCountOfPockets: (coins) => {
    const map = {};
    for (let j = 0; j < coins.length; j++) {
      map[coins[j]] = (map[coins[j]] || 0) + 1;
    }
    let max = 0;
    const keys = Object.keys(map);
    for (let jj = 0; jj < keys.length; jj++) {
      if (map[keys[jj]] > max) {
        max = map[keys[jj]];
      }
    }
    return max;
  },
};
