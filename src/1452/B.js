module.exports = {
  getMaxValue: (arr) => {
    let [sum] = arr;
    let [max] = arr;
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j];
      }
      sum += arr[j];
    }
    const num = arr.length - 1;
    return num * Math.max(Math.ceil(sum / num), max) - sum;
  },
};
