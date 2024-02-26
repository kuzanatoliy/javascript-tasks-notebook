module.exports = {
  getMaxSum: (array, number) => {
    const arr = array.sort((a, b) => a - b);
    let sum = 0;
    for (let i = 0; i < arr.length && i < number && arr[i] < 0; i++) {
      sum += arr[i];
    }
    return Math.abs(sum);
  },
};
