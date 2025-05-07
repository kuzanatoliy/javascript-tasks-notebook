module.exports = {
  isPasswordExist: (map, l, r) => {
    let c = 0;
    for (let j = 0, jj = 0; jj < l.length; jj++) {
      c = r[jj] - l[jj] + 1;
      const fls = new Array(10).fill(-1);
      while (c && j < map.length) {
        if (map[j] >= l[jj] && map[j] <= r[jj] && fls[map[j]] === -1) {
          fls[map[j]] = j;
          c--;
        }
        j++;
      }
    }
    return c ? 'YES' : 'NO';
  },
};
