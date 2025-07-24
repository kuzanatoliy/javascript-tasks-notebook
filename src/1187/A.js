module.exports = {
  getCountOfEggs: (num, t, s) => Math.max(num - t, num - s) + 1,
};
