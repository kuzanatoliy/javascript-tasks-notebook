module.exports = {
  getBalloonCounts: (arr) => {
    if (arr.length === 1 || (arr.length === 2 && arr[0] === arr[1])) {
      return [-1];
    }
    const temp = arr
      .map((item, ind) => [item, ind])
      .sort((a, b) => a[0] - b[0]);
    return [1, temp[0][1] + 1];
  },
};
