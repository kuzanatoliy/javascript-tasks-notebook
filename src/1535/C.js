/* eslint-disable eqeqeq */
module.exports = {
  getCountOfSubstring: (string) => {
    const s = string.split('');
    const n = s.length;

    const px = Array(n).fill(0);
    px[-1] = 0;
    for (let i = 0; i < n; i++) {
      if (s[i] == '?') {
        px[i] = px[i - 1] + 1;
      }
    }

    let ans = 0;
    for (let cnt = 0, i = 0; i < n; i++) {
      if (s[i] == '?') {
        s[i] = 1 ^ s[i - 1];
      }

      if (s[i] == s[i - 1]) {
        cnt = 1 + px[i - 1];
      } else {
        cnt++;
      }

      ans += cnt;
    }

    return ans;
  },
};
