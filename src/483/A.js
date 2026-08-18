module.exports = {
  getProves: (l, r) => {
    const n = l + (l % 2n);
    return n + 2n <= r ? [n, n + 1n, n + 2n] : [-1n];
  },
};
