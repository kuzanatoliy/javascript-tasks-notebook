module.exports = {
  getCountOfProblems: (arr, k) => {
    let l = 0;
    while (arr[l] <= k && l < arr.length) {
      l++;
    }
    if (l === arr.length) {
      return l;
    }
    let count = l;
    let r = arr.length - 1;
    while (arr[r] <= k) {
      r--;
      count++;
    }
    return count;
  },
};
