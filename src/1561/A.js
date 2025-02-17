module.exports = {
  sortArray: (arr) => {
    for (let j = 0; j < arr.length; j++) {
      let c = 0;
      for (let jj = j % 2; jj < arr.length - 1; jj += 2) {
        if (arr[jj] !== jj + 1 || arr[jj + 1] !== jj + 2) {
          c++;
        }
        if (arr[jj] > arr[jj + 1]) {
          const temp = arr[jj + 1];
          arr[jj + 1] = arr[jj];
          arr[jj] = temp;
        }
      }
      if (!c) {
        return j;
      }
    }
    return arr.length;
  },
};
