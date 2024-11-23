module.exports = {
  getPermutation: (arr) => {
    let l = 0;
    while (l < arr.length && arr[l] === l + 1) {
      l++;
    }
    if (l === arr.length) {
      return arr;
    }
    let r = l + 1;
    while (r < arr.length && arr[r] !== l + 1) {
      r++;
    }
    while (r > l) {
      const temp = arr[r];
      arr[r] = arr[l];
      arr[l] = temp;
      l++;
      r--;
    }
    return arr;
  },
};
