module.exports = {
  getMinBoundary: (arr) => {
    let [max] = arr;
    let min = max;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
      }
      if (arr[j] > max) {
        max = arr[j];
      }
    }
    return max - min + 1;
  },
};
