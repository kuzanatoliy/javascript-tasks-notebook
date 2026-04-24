module.exports = {
  getCountOfPlayers: (a1, a2, k1, k2, num) => {
    let max = 0;
    let d = 0;
    let n = num;
    if (k1 > k2) {
      d = Math.min(n, a2 * k2);
      max = Math.floor(d / k2);
      n -= d;
      if (num > 0) {
        d = Math.min(n, a1 * k1);
        max += Math.floor(d / k1);
      }
    } else {
      d = Math.min(n, a1 * k1);
      max = Math.floor(d / k1);
      n -= d;
      if (num > 0) {
        d = Math.min(n, a2 * k2);
        max += Math.floor(d / k2);
      }
    }
    return [Math.max(num - a1 * (k1 - 1) - a2 * (k2 - 1), 0), max];
  },
};
