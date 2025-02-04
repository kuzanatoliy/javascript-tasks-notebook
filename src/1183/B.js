/* eslint-disable no-constant-condition */
module.exports = {
  getMaxEqualPrice: (arr, k) => {
    let max = -1;
    let min = 99999999999;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    return min + k >= max - k ? min + k : -1;
  },
};
