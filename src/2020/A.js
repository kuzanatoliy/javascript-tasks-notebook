module.exports = {
  getMinCountOfOperations: (num, k) => {
    if (k === 1) {
      return num;
    }
    let count = 0;
    while (num > 0) {
      count += num % k;
      num = Math.floor(num / k);
    }
    return count;
  },
};
