module.exports = {
  getCountsOfWinners: (arr, counts) => {
    const max = arr[0] - 1;
    return counts.map((item) => Math.min(max, item));
  },
};
