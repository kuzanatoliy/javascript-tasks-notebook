module.exports = {
  getScore: (k, arr) => {
    arr.sort((a, b) => b - a);
    let res = 0;
    for (let j = 0; j < arr.length; j += 2) {
      if (arr[j + 1]) {
        const d = arr[j] - arr[j + 1];
        if (k > 0) {
          res += Math.max(0, d - k);
          k -= d;
        } else {
          res += d;
        }
      } else {
        res += arr[j];
      }
    }
    return res;
  },
};
