module.exports = {
  getMaxCandiesCount: (arr) => {
    if (arr.length === 1) {
      return 0;
    }
    let res = 0;
    let l = 0;
    let r = arr.length - 1;
    let w1 = arr[l];
    let w2 = arr[r];
    let c = 2;
    while (r > l) {
      if (w1 < w2) {
        l++;
        w1 += arr[l];
        c++;
      } else if (w1 > w2) {
        r--;
        c++;
        w2 += arr[r];
      } else {
        res = c;
        l++;
        r--;
        w1 += arr[l];
        w2 += arr[r];
        c += 2;
      }
    }
    return res;
  },
};
