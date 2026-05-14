module.exports = {
  getMaxHeight: (num, k) => k / num + (k % num > 0 ? 1n : 0n),
};
