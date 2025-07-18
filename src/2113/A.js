module.exports = {
  getCountOfSteps: (k, a, b, x, y) => {
    let count = 0;
    if (x < y) {
      count = Math.ceil(Math.max(k - a + 1, 0) / x);
      k -= count * x;
      count += Math.ceil(Math.max(k - b + 1, 0) / y);
    } else {
      count = Math.ceil(Math.max(k - b + 1, 0) / y);
      k -= count * y;
      count += Math.ceil(Math.max(k - a + 1, 0) / x);
    }
    return count;
  },
};
