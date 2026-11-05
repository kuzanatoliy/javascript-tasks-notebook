module.exports = {
  getOperationsCount: (arr) => {
    let res = Infinity;
    for (let j = 0; j < arr.length && j < res; j++) {
      let count = j;
      for (let jj = j + 1; jj < arr.length; jj++) {
        count += arr[jj] > arr[j];
      }
      res = Math.min(res, count);
    }
    return res;
  },
};
