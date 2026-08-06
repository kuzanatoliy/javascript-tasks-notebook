module.exports = {
  getOperationsCount: (k, str) => {
    let ans = 0;
    for (let i = 0; i < str.length; i++) {
      if (i < k && str[i] === 'L') {
        ans++;
      }
      if (str.length - i <= k && str[i] === 'R') {
        ans++;
      }
    }
    if (str.length < 2 * k) {
      ans = -1;
    }
    return ans;
  },
};
