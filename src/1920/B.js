module.exports = {
  getMaxSum: (arr, k, x) => {
    arr.sort((a, b) => a - b);
    let curr = 0;
    for (let i = 0; i < arr.length - x; i++) {
      curr += arr[i];
    }
    for (let i = arr.length - x; i < arr.length; i += 1) {
      curr -= arr[i];
    }
    let res = curr;
    for (let j = 1; j <= k; j++) {
      curr = curr + arr[arr.length - j] - 2 * (arr[arr.length - x - j] || 0);
      res = Math.max(res, curr);
    }
    return res;
  },
};
