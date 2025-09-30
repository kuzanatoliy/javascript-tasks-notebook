module.exports = {
  getCountOfOperations: (num, m) => {
    if (m % num) {
      return -1;
    }
    let d = m / num;
    let count = 0;
    while (d > 1) {
      if (d % 2 === 0) {
        d /= 2;
      } else if (d % 3 === 0) {
        d /= 3;
      } else {
        return -1;
      }
      count++;
    }
    return count;
  },
};
