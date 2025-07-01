module.exports = {
  getMinDifficulty: (arr) => {
    let max = 0;
    for (let jj = 1; jj < arr.length; jj++) {
      max = Math.max(max, arr[jj] - arr[jj - 1]);
    }
    let min = 1001;
    for (let j = 2; j < arr.length; j++) {
      min = Math.min(min, arr[j] - arr[j - 2]);
    }
    return Math.max(max, min);
  },
};
