module.exports = {
  getTheBestChoice: (l, r) => {
    if (r - l >= 100) {
      const d = l % 100;
      return d >= 90 ? l - d + 190 : l - d + 90;
    }
    let best = l;
    let luck = 0;
    while (l <= r) {
      const ans = l
        .toString()
        .split('')
        .map((item) => +item);
      const d = Math.max(...ans) - Math.min(...ans);
      if (luck < d) {
        luck = d;
        best = l;
      }
      l++;
    }
    return best;
  },
};
