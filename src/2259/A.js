module.exports = {
  getFarmsCount: (k, map) => {
    let count = 0;
    for (let j = 0; j < map.length; j += k) {
      let c = 0;
      for (let jj = 0; jj < k; jj++) {
        c += map[jj + j] === '1';
      }
      count += c === k;
    }
    return count;
  },
};
