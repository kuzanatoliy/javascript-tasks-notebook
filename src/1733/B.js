module.exports = {
  getGameMap: (num, x, y) => {
    const min = Math.min(x, y);
    const max = Math.max(x, y);
    if (min !== 0 || max === 0 || (num - 1) % max) {
      return [-1];
    }
    const res = [];
    let f = 1;
    while (f <= max) {
      res.push(1);
      f++;
    }
    for (let j = max + 2; j <= num; j += max) {
      let jj = 0;
      while (jj < max) {
        res.push(j);
        jj++;
      }
    }
    return res;
  },
};
