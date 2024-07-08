module.exports = {
  getPosition: (a, b, k) => {
    const d = Math.ceil(k / 2);
    return d * a - (k - d) * b;
  },
};
