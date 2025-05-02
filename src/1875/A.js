module.exports = {
  getMaxTime: (a, b, arr) => {
    a--;
    return arr.reduce((sum, next) => sum + Math.min(a, next), b);
  },
};
