module.exports = {
  getMinCountOfOperations: (arr, k) => {
    let [min] = arr;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
    }
    let count = 0;
    for (let jj = 0; jj < arr.length; jj++) {
      const d = arr[jj] - min;
      if (d % k) {
        return -1;
      }
      count += d / k;
    }
    return count;
  },
};
