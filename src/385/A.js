module.exports = {
  getMaxIncome: (c, arr) => {
    let max = 0;
    for (let j = 1; j < arr.length; j++) {
      max = Math.max(arr[j - 1] - arr[j] - c, max);
    }
    return max;
  },
};
