module.exports = {
  getCountOfChocolateBars: (l, r, k, array) => {
    const arr = array.sort((a, b) => a - b);
    let j = 0;
    while (j < arr.length && arr[j] < l) {
      j++;
    }
    let sum = arr[j];
    let count = 0;
    while (j < arr.length && arr[j] <= r && sum <= k) {
      count++;
      j++;
      sum += arr[j];
    }
    return count;
  },
};
