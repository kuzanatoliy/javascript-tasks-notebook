/* eslint-disable prefer-destructuring */
module.exports = {
  restoreArray: (arr) => {
    const ans = new Array(arr.length + 1);
    ans[0] = arr[0];
    for (let i = 1; i < arr.length; i++) {
      ans[i] = arr[i - 1] | arr[i];
    }
    ans[arr.length] = arr[arr.length - 1];

    for (let i = 0; i < arr.length; i++) {
      if ((ans[i] & ans[i + 1]) !== arr[i]) {
        return [-1];
      }
    }

    return ans;
  },
};
