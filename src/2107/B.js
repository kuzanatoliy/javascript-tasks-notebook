module.exports = {
  getWinner: (k, arr) => {
    arr.sort((a, b) => b - a);
    if (
      arr[0] - arr[arr.length - 1] - 1 > k ||
      arr[1] - arr[arr.length - 1] > k
    ) {
      return 'Jerry';
    }
    return arr.reduce((a, b) => a + b) % 2 ? 'Tom' : 'Jerry';
  },
};
