module.exports = {
  getMaxes: (arr) => {
    const maxes = [arr[0]];
    const sums = [arr[0]];
    for (let j = 1; j < arr.length; j++) {
      maxes.push(Math.max(maxes[j - 1], arr[j]));
      sums.push(sums[j - 1] + arr[j]);
    }
    const res = [];
    for (let jj = arr.length - 1; jj >= 0; jj--) {
      res.push(
        sums[sums.length - 1] - (sums[jj - 1] || 0) + maxes[jj] - arr[jj]
      );
    }
    return res;
  },
};
