module.exports = {
  getCountOfSteps: (arr) => {
    let j = 0;
    let count = 0;
    while (j < arr.length && arr[j] === 0) {
      j++;
    }
    while (j < arr.length - 1) {
      count += arr[j] > 0 ? arr[j] : 1;
      j++;
    }
    return count;
  },
};
