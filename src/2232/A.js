module.exports = {
  getMaxOperationCount: (arr) => {
    arr.sort((a, b) => a - b);
    let ans = arr.length;
    let j = 0;
    while (j < arr.length) {
      let jj = j + 1;
      while (jj < arr.length && arr[j] === arr[jj]) {
        jj++;
      }
      ans = Math.min(ans, Math.max(j, arr.length - jj));
      j = jj;
    }
    return ans;
  },
};
