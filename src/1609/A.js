module.exports = {
  getMaxSum: (arr) => {
    let k = 0n;
    for (let j = 0; j < arr.length; j++) {
      while (!(arr[j] % 2n)) {
        arr[j] /= 2n;
        k++;
      }
    }
    let [max] = arr;
    let [sum] = arr;
    for (let jj = 1; jj < arr.length; jj++) {
      sum += arr[jj];
      if (max < arr[jj]) {
        max = arr[jj];
      }
    }
    return sum - max + max * 2n ** k;
  },
};
