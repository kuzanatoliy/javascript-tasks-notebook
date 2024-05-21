const getFastCountSet = (n) => {
  let count = 0;
  while (n !== 0) {
    count++;
    n &= n - 1;
  }
  return count;
};

const isValidContest = (diff, l, r, x, i) => {
  let totalDiff = 0;
  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;
  let pos = 0;
  while (i > 0) {
    if ((i & 1) !== 0) {
      totalDiff += diff[pos];
      min = Math.min(min, diff[pos]);
      max = Math.max(max, diff[pos]);
    }
    i >>= 1;
    pos++;
  }
  return totalDiff >= l && totalDiff <= r && max - min >= x;
};

module.exports = {
  getCountContest: (diff, l, r, x) => {
    const n = diff.length;
    let count = 0;
    for (let i = 0; i < 1 << n; i++) {
      if (getFastCountSet(i) >= 2) {
        if (isValidContest(diff, l, r, x, i)) {
          count++;
        }
      }
    }
    return count;
  },
};
