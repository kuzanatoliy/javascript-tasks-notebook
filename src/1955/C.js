/* eslint-disable prefer-destructuring */
module.exports = {
  getCountOfDestroyedSheeps: (arr, k) => {
    let l = 0;
    let r = arr.length - 1;
    const mod = k % 2;
    let d = (k - mod) / 2;
    let count = 0;
    while (l < r && d > 0) {
      const s = Math.min(arr[l], arr[r], d);
      arr[l] -= s;
      arr[r] -= s;
      d -= s;
      if (arr[l] === 0) {
        count++;
        l++;
      }
      if (arr[r] === 0) {
        count++;
        r--;
      }
    }
    k = 2 * d;
    if (arr[l] > 0 && k >= arr[l]) {
      count++;
    }
    arr[l] -= k;
    if (arr[l] === mod && mod > 0) {
      count++;
    }
    return count;
  },
};
