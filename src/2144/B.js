/* eslint-disable no-unmodified-loop-condition */
module.exports = {
  getLength: (arr) => {
    const set = new Set(arr);
    const c0 = set.has(0) ? arr.length - set.size + 1 : 0;
    let l = 0;
    while (
      l < arr.length &&
      (arr[l] === l + 1 || (arr[l] === 0 && c0 === 1 && !set.has(l + 1)))
    ) {
      l++;
    }
    let r = arr.length - 1;
    while (
      r < arr.length &&
      (arr[r] === r + 1 || (arr[r] === 0 && c0 === 1 && !set.has(r + 1)))
    ) {
      r--;
    }
    return l === arr.length ? 0 : r - l + 1;
  },
};
