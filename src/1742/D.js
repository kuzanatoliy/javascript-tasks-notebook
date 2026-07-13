/* eslint-disable max-depth */
const gcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a < b) {
    const r = a;
    a = b;
    b = r;
  }

  while (a) {
    const r = b % a;
    b = a;
    a = r;
  }
  return b;
};

module.exports = {
  getMaxSum: (arr) => {
    const a = new Array(1002).fill(-1);
    for (let i = 0; i < arr.length; i++) {
      a[arr[i]] = i + 1;
    }

    let ans = -1;

    for (let i = 0; i < 1001; i++) {
      for (let j = i; j < 1001; j++) {
        if (a[i] !== -1 && a[j] !== -1) {
          if (gcd(i, j) === 1) {
            ans = Math.max(ans, a[i] + a[j]);
          }
        }
      }
    }

    return ans;
  },
};
