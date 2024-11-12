module.exports = {
  getMaxCountOfOperations: (l, r, k) => Math.max(Math.floor(r / k) - l + 1, 0),
};
