module.exports = {
  getMinDuration: (a, b, c, d) => {
    const arr = [a, b, c].sort((v1, v2) => v1 - v2);
    return Math.max(0, d - arr[1] + arr[0]) + Math.max(0, d - arr[2] + arr[1]);
  },
};
