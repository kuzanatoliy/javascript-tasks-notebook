module.exports = {
  getJumps: (x, k) => (x % k > 0 ? [1, [x]] : [2, [1, x - 1]]),
};
