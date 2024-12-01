module.exports = {
  getDistance: (num, x, a, b) => {
    let min = a;
    let max = b;
    if (b < a) {
      min = b;
      max = a;
    }
    const l = min > 1 ? Math.max(1, min - x) : 1;
    x -= min - l;
    return Math.min(num, max + x) - l;
  },
};
