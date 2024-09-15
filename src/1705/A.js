module.exports = {
  isItPossibleToSort: (arr, h) => {
    arr.sort((a, b) => a - b);
    const n = arr.length / 2;
    for (let j = 0; j < n; j++) {
      if (arr[j + n] - arr[j] < h) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
