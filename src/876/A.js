module.exports = {
  getMinDistance: (num, a, b, c) => {
    if (num === 1) {
      return 0;
    }
    const min = Math.min(a, b);
    return min + Math.min(min, c) * (num - 2);
  },
};
