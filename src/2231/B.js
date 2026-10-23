module.exports = {
  isItPossibleToSort: (arr) => {
    let d = 0;
    for (let j = 1; j < arr.length; j++) {
      d = Math.max(d, arr[j - 1] - arr[j]);
    }
    for (let jj = 1; jj < arr.length; jj++) {
      if (arr[jj] < arr[jj - 1]) {
        arr[jj] += d;
      }
      if (arr[jj] < arr[jj - 1]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
