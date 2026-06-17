module.exports = {
  getOperationCount: (d, arr) => {
    let sum = 0;
    for (let j = 0; j < arr.length - 1; j++) {
      sum += d - arr[j];
    }
    return sum;
  },
};
