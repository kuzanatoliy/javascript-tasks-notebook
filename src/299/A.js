module.exports = {
  getCommonDivisor: (arr) => {
    let [min] = arr;
    for (let j = 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
      }
    }
    for (let jj = 0; jj < arr.length; jj++) {
      if (arr[jj] % min) {
        return -1;
      }
    }
    return min;
  },
};
