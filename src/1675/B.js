module.exports = {
  getCountOfOperations: (arr) => {
    let count = 0;
    let k = false;
    for (let j = arr.length - 2; j > -1; j--) {
      while (arr[j] - arr[j + 1] >= 0) {
        if (arr[j + 1] <= j) {
          k = true;
          break;
        }
        while (arr[j] / arr[j + 1] > 16385) {
          arr[j] /= 16384;
          arr[j] -= arr[j] % 1;
          count += 14;
        }
        arr[j] /= 2;
        arr[j] -= arr[j] % 1;
        count++;
      }
      if (k) {
        return -1;
      }
    }
    return count;
  },
};
