module.exports = {
  getCountOfElems: (array) => {
    let l = 0;
    const arr = array.sort((a, b) => a - b);
    while (l < arr.length && arr[l] === arr[l + 1]) {
      l++;
    }
    if (array.length === l + 1) {
      return 0;
    }
    let r = arr.length - 1;
    while (r > l && arr[r] === arr[r - 1]) {
      r--;
    }
    return r - 1 - l;
  },
};
