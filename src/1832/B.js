module.exports = {
  getMaxSum: (k, arr) => {
    arr.sort((a, b) => a - b);
    const preSum = new Array(arr.length).fill(0);
    for (let i = 0; i < arr.length; i++) {
      preSum[i] = arr[i] + (i > 0 ? preSum[i - 1] : 0);
    }
    let sum = 0;
    for (let i = 0; i <= k; i++) {
      const l = 2 * (k - i) - 1;
      const r = arr.length - 1 - i;
      sum = Math.max(sum, preSum[r] - (l >= 0 ? preSum[l] : 0));
    }
    return sum;
  },
};
