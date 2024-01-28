module.exports = {
  getMinSum: (numbers) => {
    const arr = numbers.sort((a, b) => b - a);
    let i = 0;
    let s = 0;
    let result = 0;
    while (i < numbers.length) {
      let count = 1;
      let sum = arr[i];
      i++;
      while (i < numbers.length && arr[i - 1] === arr[i] && count < 3) {
        count++;
        sum += arr[i];
        i++;
      }
      if (result < sum && count > 1) {
        result = sum;
      }
      s += sum;
    }
    return s - result;
  },
};
