module.exports = {
  getKthNumber: (num, k) => {
    let ans = 0;
    let power = 1;
    let temp = k;
    while (temp > 0) {
      if (temp & 1) {
        ans = (ans + power) % 1000000007;
      }
      temp >>= 1;
      power = (power * num) % 1000000007;
    }
    return ans;
  },
};
