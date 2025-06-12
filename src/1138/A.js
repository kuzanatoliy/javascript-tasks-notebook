module.exports = {
  getMaxSubSet: (arr) => {
    const ans = [];
    let j = 0;
    while (j < arr.length) {
      let c = 1;
      while (arr[j] === arr[j + 1] && j < arr.length) {
        c++;
        j++;
      }
      ans.push(c);
      j++;
    }
    let res = 2;
    for (let jj = 1; jj < ans.length; jj++) {
      res = Math.max(res, Math.min(ans[jj - 1], ans[jj]) * 2);
    }
    return res;
  },
};
