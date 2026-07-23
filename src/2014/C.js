module.exports = {
  getMinGoldCount: (arr) => {
    if (arr.length <= 2) {
      return -1;
    }
    arr.sort((a, b) => b - a);
    const sum = arr.reduce((a, b) => a + b, 0);
    const lim = arr[Math.ceil(arr.length / 2) - 1] * arr.length * 2 + 1;
    return Math.max(lim - sum, 0);
  },
};
