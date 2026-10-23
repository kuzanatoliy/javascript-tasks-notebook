module.exports = {
  buildMap: (str) => {
    const n = str.length;
    const s = `0${str}`;
    let c1 = 0;
    let c2 = 0;
    for (let i = 1; i <= n / 2; ++i) {
      if (s[i] === s[n - i + 1]) {
        c2++;
      } else {
        c1++;
      }
    }
    let ans = '';
    for (let i = 0; i <= n; ++i) {
      const check = (x) => {
        if (x < c1) {
          return false;
        }
        if (x > c1 + 2 * c2) {
          return false;
        }
        if (x % 2 !== c1 % 2) {
          return false;
        }
        return true;
      };
      if (check(i) || (n % 2 === 1 && check(i - 1))) {
        ans += '1';
      } else {
        ans += '0';
      }
    }
    return ans;
  },
};
