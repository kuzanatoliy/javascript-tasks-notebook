module.exports = {
  getMaxDifference: (array, k) => {
    const arr = array.sort((a, b) => b - a);
    let sum = 0;
    for (let j = 0; j <= k; j++) {
      sum += arr[j];
    }
    return sum;
  },
};
