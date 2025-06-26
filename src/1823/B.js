module.exports = {
  isItPossibleToSort: (arr, k) => {
    let count = 0;
    let j = 0;
    while (j < arr.length) {
      j++;
      count += j % k !== arr[j - 1] % k;
    }
    if (count === 0) {
      return 0;
    } else if (count === 2) {
      return 1;
    }
    return -1;
  },
};
