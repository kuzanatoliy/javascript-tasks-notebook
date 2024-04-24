module.exports = {
  getMaxNumberOfModels: (array) => {
    let ans = 0;
    const dp = [];
    for (let j = array.length; j >= 1; j--) {
      let mx = 0;
      for (let jj = j + j; jj <= array.length; jj += j) {
        if (array[jj - 1] > array[j - 1]) {
          mx = Math.max(mx, dp[jj]);
        }
      }
      dp[j] = mx + 1;
      ans = Math.max(ans, dp[j]);
    }

    return ans;
  },
};
