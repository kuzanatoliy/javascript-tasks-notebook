module.exports = {
  getMaxValue: (x, y, arr) => {
    const s = arr.map((item) => Math.floor(item / x));
    const sall = s.reduce((a, b) => a + b, 0);
    return Math.max(...s.map((item, ind) => (sall - item) * y + arr[ind]));
  },
};
