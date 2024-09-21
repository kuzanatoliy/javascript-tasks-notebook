module.exports = {
  getMaxValue: (arr) => {
    let sum1 = 0;
    let sum2 = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > 0) {
        sum1 += arr[j];
        continue;
      }
      sum2 += arr[j];
    }
    return Math.abs(sum1 - Math.abs(sum2));
  },
};
