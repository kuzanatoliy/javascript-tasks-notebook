module.exports = {
  isItPossibleToWin: (arr, x) => {
    let first = -1;
    let last = -1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j]) {
        if (first < 0) {
          first = j;
        }
        last = j;
      }
    }
    return last - first + 1 <= x ? 'YES' : 'NO';
  },
};
