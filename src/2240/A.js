module.exports = {
  getMaxPopcount: (num, k) => {
    let res = Math.min(k, num);
    let store = Math.max(num - k, 0);
    let d = 2;
    while (store > d * k) {
      res += k;
      store -= d * k;
      d *= 2;
    }
    return res + Math.floor(store / d);
  },
};
