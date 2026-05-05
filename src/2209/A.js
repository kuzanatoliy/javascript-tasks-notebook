module.exports = {
  getMaxPower: (c, k, arr) => {
    arr.sort((a, b) => a - b);
    for (let j = 0; j < arr.length && c >= arr[j]; j++) {
      if (k > 0) {
        const d = c - arr[j];
        c += arr[j] + Math.min(d, k);
        k -= d;
      } else {
        c += arr[j];
      }
    }
    return c;
  },
};
