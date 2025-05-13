/* eslint-disable camelcase */
module.exports = {
  getCountOfOperations: (arr) => {
    let [min] = arr;
    let max = min;
    let min_i = 0;
    let max_i = min_i;
    let sorted = true;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        min_i = i;
      } else if (arr[i] > max) {
        max = arr[i];
        max_i = i;
      }
      if (arr[i] < arr[i - 1]) {
        sorted = false;
      }
    }

    if (sorted) {
      return 0;
    } else if (min_i === arr.length - 1 && max_i === 0) {
      return 3;
    } else if (min_i !== 0 && max_i !== arr.length - 1) {
      return 2;
    } else {
      return 1;
    }
  },
};
