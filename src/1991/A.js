/* eslint-disable sort-keys */
module.exports = {
  getLastNumber: (arr) => {
    let [max] = arr;
    for (let j = 2; j < arr.length; j += 2) {
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    return max;
  },
};
