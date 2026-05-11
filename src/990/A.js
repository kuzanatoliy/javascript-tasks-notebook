module.exports = {
  getMinAmount: (num, m, a, b) => {
    const d = num % m;
    return Math.min(d * b, (m - d) * a);
  },
};
