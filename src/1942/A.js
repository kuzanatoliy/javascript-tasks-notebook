module.exports = {
  getValidArray: (num, k) => {
    if (num === k) {
      return new Array(num).fill(1);
    }
    if (k === 1) {
      return new Array(num).fill(0).map((_, ind) => ind + 1);
    }
    return [-1];
  },
};
