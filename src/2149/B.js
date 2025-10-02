module.exports = {
  getMinMaxDifference: (arr) => {
    arr.sort((a, b) => a - b);
    let max = 0;
    for (let j = 0; j < arr.length; j += 2) {
      const d = arr[j + 1] - arr[j];
      if (d > max) {
        max = d;
      }
    }
    return max;
  },
};
