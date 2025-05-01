module.exports = {
  getLine: (num, m, l, r) => {
    const d = Math.min(m, r);
    m -= d;
    return [-m, d];
  },
};
