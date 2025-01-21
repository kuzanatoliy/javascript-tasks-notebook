module.exports = {
  transformArray: (arr, k) => {
    const lim = k % 2 === 1 ? 1 : 2;
    for (let j = 0; j < lim; j++) {
      const max = Math.max(...arr);
      for (let jj = 0; jj < arr.length; jj++) {
        arr[jj] = max - arr[jj];
      }
    }
    return arr;
  },
};
