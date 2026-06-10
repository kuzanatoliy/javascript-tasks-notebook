module.exports = {
  getMaxCost: (d, arr, m) => {
    arr.sort((a, b) => a - b);
    let sum = 0;
    for (let j = 0; j < m && j < arr.length; j++) {
      sum += arr[j];
    }
    return sum - Math.max(0, m - arr.length) * d;
  },
};
