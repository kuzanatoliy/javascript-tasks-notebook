module.exports = {
  getSumOfHighestPlanks: (arr, k) => {
    let min = Number.MAX_SAFE_INTEGER;
    let res = 0;
    for (let i = 0; i < arr.length - k + 1; i++) {
      let sum = 0;
      for (let j = 0; j < k; j++) {
        sum += arr[i + j];
      }
      if (sum < min) {
        min = sum;
        res = i + 1;
      }
    }
    return res;
  },
};
