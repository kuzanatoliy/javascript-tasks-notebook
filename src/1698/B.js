module.exports = {
  getMaxCountOfPiles: (arr, k) => {
    if (k === 1) {
      return Math.floor((arr.length - 1) / 2);
    }
    let count = 0;
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[j] > arr[j - 1] + arr[j + 1]) {
        count++;
      }
    }
    return count;
  },
};
