module.exports = {
  getCountOfOperations: (num, k) => {
    let count = 0n;
    while (num) {
      count += 1n + (num % k);
      num /= k;
    }
    return count - 1n;
  },
};
