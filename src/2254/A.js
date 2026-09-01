module.exports = {
  getRoundCount: (a, b, c) => {
    const arr = [a, b, c].sort((i1, i2) => i1 - i2);
    return Math.min(arr[1] - arr[0], arr[2] - arr[1]);
  },
};
