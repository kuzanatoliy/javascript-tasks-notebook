module.exports = {
  getOriginalSizes: (array) => {
    const arr = array.sort((a, b) => a - b);
    let l = 0;
    let r = arr.length - 1;
    const length = arr.length - 2;
    while (l < r) {
      const ll = arr[l] * arr[r];
      if (ll > length) {
        r--;
        continue;
      }
      if (ll === length) {
        return [arr[l], arr[r]];
      }
      l++;
    }
    return [0, 0];
  },
};
