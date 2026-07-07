module.exports = {
  getMaxValueAndCount: (arr) => {
    let d = 1073741824;
    let res = [];
    while (!res.length) {
      d >>= 1;
      // eslint-disable-next-line no-loop-func
      res = arr.filter((item) => item % d === 0);
    }
    return [d, res.length];
  },
};
