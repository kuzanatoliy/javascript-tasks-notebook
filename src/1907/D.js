/* eslint-disable no-unused-expressions */
const tryK = (k, ranges) => {
  let l = 0;
  let r = 0;

  for (const [ll, rr] of ranges) {
    l -= k;
    r += k;
    r = Math.min(r, rr);
    l = Math.max(l, ll);

    if (l > r) {
      return false;
    }
  }
  return true;
};

module.exports = {
  getK: (ranges) => {
    let l = -1;
    let r = 1e9;

    while (r > l + 1) {
      const mid = Math.floor((l + r) / 2);
      tryK(mid, ranges) ? (r = mid) : (l = mid);
    }
    return r;
  },
};
