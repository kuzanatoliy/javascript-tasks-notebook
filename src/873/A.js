module.exports = {
  getMinTime: (k, x, arr) => {
    let sum = 0;
    let j = 0;
    const d = arr.length - k;
    while (j < d) {
      sum += arr[j];
      j++;
    }
    return sum + x * k;
  },
};
