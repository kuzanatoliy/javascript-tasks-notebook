module.exports = {
  getCountOfVariants: (map) => {
    let l = 0;
    let r = map.length - 1;
    let c = 0;
    while (l < r) {
      if (map[l] === map[r]) {
        c = 2;
        while (map[l] === map[l + 1] && l < r) {
          c++;
          l++;
        }
        l++;
        while (map[r] === map[r - 1] && l < r) {
          r--;
          c++;
        }
        r--;
      } else {
        return 0;
      }
      if (c === 2 || l === r) {
        return 0;
      }
    }
    return c < 2 ? 0 : c;
  },
};
