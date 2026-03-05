module.exports = {
  getMaxValue: (h, l, arr) => {
    arr.sort((a, b) => a - b);
    if (h < l) {
      const ans = l;
      l = h;
      h = ans;
    }
    let first = 0;
    let last = arr.length - 1;
    let count = 0;
    while (first < last) {
      if (arr[last] > h) {
        last--;
      } else if (arr[first] > l) {
        break;
      } else {
        first++;
        last--;
        count++;
      }
    }
    return count;
  },
};
