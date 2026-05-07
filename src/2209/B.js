module.exports = {
  getMaxCounts: (arr) => {
    const res = [];
    for (let j = 0; j < arr.length; j++) {
      let c1 = 0;
      let c2 = 0;
      for (let jj = j + 1; jj < arr.length; jj++) {
        c1 += arr[j] > arr[jj];
        c2 += arr[j] < arr[jj];
      }
      res.push(Math.max(c1, c2));
    }
    return res;
  },
};
