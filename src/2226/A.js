module.exports = {
  getMinCost: (arr) => {
    let sum = arr[arr.length - 1];
    for (let j = arr.length - 2; j >= 0; j--) {
      if (arr[j] !== 1) {
        sum += arr[j];
      }
    }
    return sum;
  },
};
