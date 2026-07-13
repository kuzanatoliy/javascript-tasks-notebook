module.exports = {
  getMaxSubarrSum: (arr) => {
    let [sum] = arr;
    let maxSum = sum;
    let parity = arr[0] % 2 === 0;
    for (let i = 1; i < arr.length; i++) {
      const cur = arr[i] % 2 === 0;
      if (cur === parity || sum < 0) {
        sum = arr[i];
      } else {
        sum += arr[i];
      }
      maxSum = Math.max(maxSum, sum);
      parity = cur;
    }
    return maxSum;
  },
};
