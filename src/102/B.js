module.exports = {
  getCountOfOperations: (num) => {
    let snum = num.toString();
    let count = 0;
    while (snum.length > 1) {
      num = snum
        .split('')
        .map((item) => +item)
        .reduce((a, b) => a + b, 0);
      snum = num.toString();
      count++;
    }
    return count;
  },
};
