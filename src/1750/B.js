module.exports = {
  getMaxCost: (str) => {
    let c0 = 0;
    let c1 = 0;
    let l = 0;
    let curr = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === str[j - 1]) {
        curr++;
      } else {
        curr = 1;
      }
      if (curr > l) {
        l = curr;
      }
      if (str[j] === '0') {
        c0++;
        continue;
      }
      c1++;
    }
    return Math.max(l * l, c1 * c0);
  },
};
