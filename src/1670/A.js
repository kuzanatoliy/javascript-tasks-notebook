module.exports = {
  isItPossibleToSort: (arr) => {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < 0) {
        count++;
        arr[j] = -arr[j];
      }
    }
    for (let jj = 0; jj < count; jj++) {
      arr[jj] = -arr[jj];
    }
    for (let jjj = 1; jjj < arr.length; jjj++) {
      if (arr[jjj - 1] > arr[jjj]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
