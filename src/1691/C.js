/* eslint-disable complexity */
module.exports = {
  getMinSum: (str, k) => {
    let l = 0;
    while (l < str.length && str[l] === '0') {
      l++;
    }
    let r = str.length - 1;
    while (r > l && str[r] === '0') {
      r--;
    }
    if (l > r) {
      return 0;
    }
    let sum = 0;
    for (let j = 1; j < str.length - 1; j++) {
      if (str[j] === '1') {
        sum += 11;
      }
    }
    if (str[0] === '1') {
      sum += 10;
    }
    if (str[str.length - 1] === '1') {
      sum += 1;
    }
    const temp = k;
    if (str.length - r - 1 <= k && r !== str.length - 1) {
      k -= str.length - r - 1;
      sum = sum === 10 ? 1 : sum - 10;
    }
    if (l === r && temp !== k) {
      return sum;
    }
    if (l <= k && l > 0 && l !== str.length - 1) {
      sum -= 1;
    }
    return sum;
  },
};
