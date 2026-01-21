module.exports = {
  getMaxSum: (arr) => {
    const even = [];
    const odd = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] % 2) {
        odd.push(arr[j]);
      } else {
        even.push(arr[j]);
      }
    }
    if (odd.length === 0) {
      return 0;
    }
    let sum = even.reduce((a, b) => a + b, 0);
    odd.sort((a, b) => b - a);
    for (let jj = 0; jj < odd.length / 2; jj++) {
      sum += odd[jj];
    }
    return sum;
  },
};
