module.exports = {
  getMinCountOfOperations: (arr, k) => {
    let res = k;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      let d = arr[j] % k;
      count += arr[j] % 2 === 0;
      if (d === 0) {
        return 0;
      }
      d = k - d;
      if (d < res) {
        res = d;
      }
    }
    if (k === 4) {
      return Math.min(res, count < 2 ? 2 - count : 0);
    }
    return res;
  },
};
