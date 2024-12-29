module.exports = {
  getCounts: (a, b, c, d, k) => {
    const c1 = Math.ceil(a / c);
    const c2 = Math.ceil(b / d);
    return c1 + c2 > k ? [-1] : [c1, k - c1];
  },
};
