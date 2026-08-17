module.exports = {
  getLeftTime: (s, k, m) => {
    if (s <= k) {
      return Math.max(s - (m % k), 0);
    } else {
      const d = Math.floor(m / k);
      if (d === 0) {
        return s - m;
      } else if (d % 2) {
        return k - (m % k);
      } else {
        return s - k - (m % k);
      }
    }
  },
};
