module.exports = {
  getMaxValue: (rests, k) => {
    const arr = rests.map((item) => item[0] - Math.max(0, item[1] - k));
    return Math.max(...arr);
  },
};
