module.exports = {
  getMaxPositiveElemCount: (arr) => {
    for (let j = arr.length - 2; j >= 0; j--) {
      if (
        (arr[j] >= 0 && arr[j + 1] > 0) ||
        (arr[j] < 0 && arr[j] + arr[j + 1] > 0)
      ) {
        arr[j] += arr[j + 1];
      }
    }
    let res = 0;
    for (let jj = 0; jj < arr.length; jj++) {
      if (arr[jj] > 0) {
        res++;
      }
    }
    return res;
  },
};
