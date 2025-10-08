module.exports = {
  getMaxCountOfPoints: (num, m, k) => {
    num /= k;
    return m > num ? num - Math.ceil((m - num) / (k - 1)) : m;
  },
};
