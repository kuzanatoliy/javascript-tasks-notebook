module.exports = {
  getMaxAmount: (num, k) => (k - 1) * 2 + 2 ** (num - k + 1),
};
