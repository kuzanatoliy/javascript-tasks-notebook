module.exports = {
  getButyNum: (num, k) => {
    while (
      num
        .toString()
        .split('')
        .map((item) => +item)
        .reduce((a, b) => a + b, 0) % k
    ) {
      num++;
    }
    return num;
  },
};
