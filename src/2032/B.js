module.exports = {
  getMeta: (num, k) => {
    if (num === 1) {
      return [1, [1]];
    }
    if (k === 1 || k === num) {
      return [-1];
    }
    const mid = (1 + num) / 2;
    return [3, k > mid ? [1, 2 * k - num + 1, num] : [1, 2, 2 * k - 1]];
  },
};
