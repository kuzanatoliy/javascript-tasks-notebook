module.exports = {
  getMaxSum: (num, k, x) => {
    if (k > num || k > x + 1) {
      return -1;
    }
    let sum = 0;
    let j = 1;
    while (j < k) {
      sum += j;
      j++;
    }
    if (x === k) {
      x--;
    }
    return sum + x * (num - k);
  },
};
