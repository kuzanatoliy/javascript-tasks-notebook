module.exports = {
  getMaxLength: (arr) => {
    arr.sort((a, b) => a - b);

    if (arr[0] > 0) {
      return 1;
    }

    if (arr[arr.length - 1] <= 0) {
      return arr.length;
    }

    let min = 1;
    let d = arr[arr.length - 1];
    while (min < arr.length) {
      if (arr[min] > 0) {
        break;
      }
      d = Math.min(d, arr[min] - arr[min - 1]);
      min++;
    }

    if (d >= arr[min]) {
      min++;
    }

    return min;
  },
};
