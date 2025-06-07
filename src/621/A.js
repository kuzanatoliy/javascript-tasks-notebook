module.exports = {
  getMaxEvenSum: (arr) => {
    let min = Number.MAX_SAFE_INTEGER;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
      min = arr[j] % 2 && arr[j] < min ? arr[j] : min;
    }
    if (sum % 2) {
      sum -= min;
    }
    return sum;
  },
};
