module.exports = {
  getMaxSum: (arr) => {
    let min = Infinity;
    let sum = 0;
    let c = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < 0) {
        arr[j] = -arr[j];
        c++;
      }
      if (arr[j] < min) {
        min = arr[j];
      }
      sum += arr[j];
    }
    if (c % 2) {
      sum -= 2 * min;
    }
    return sum;
  },
};
