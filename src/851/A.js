module.exports = {
  getCountOfSeparators: (num, k, t) => Math.min(k, num > t ? t : num + k - t),
};
