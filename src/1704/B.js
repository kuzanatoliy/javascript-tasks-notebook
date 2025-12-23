module.exports = {
  getCountOfChanges: (arr, x) => {
    x *= 2;
    let [min] = arr;
    let max = min;
    let count = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      } else if (arr[j] > max) {
        max = arr[j];
      }
      if (max - min > x) {
        min = arr[j];
        max = arr[j];
        count++;
      }
    }
    return count;
  },
};
