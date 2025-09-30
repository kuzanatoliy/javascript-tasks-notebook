module.exports = {
  getCountOfGoodPrefixes: (arr) => {
    let max = 0;
    let sum = 0;
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > max) {
        sum += max;
        max = arr[j];
      } else {
        sum += arr[j];
      }
      count += sum === max;
    }
    return count;
  },
};
