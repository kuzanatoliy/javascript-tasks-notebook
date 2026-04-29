module.exports = {
  getCountOfPairs: (num, k) =>
    num >= k
      ? Math.floor(k / 2) + (k % 2) - 1
      : Math.max(Math.floor((num + num - k + 1) / 2), 0),
};
