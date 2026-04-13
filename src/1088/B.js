/* eslint-disable prefer-destructuring */
module.exports = {
  getMinValues: (k, arr) => {
    const res = new Array(k).fill(0);
    arr.sort((a, b) => a - b);
    res[0] = arr[0];
    for (let j = 1, jj = 1; j < arr.length && jj < k; j++) {
      if (arr[j - 1] === arr[j]) {
        continue;
      }
      res[jj] = arr[j] - arr[j - 1];
      jj++;
    }
    return res;
  },
};
