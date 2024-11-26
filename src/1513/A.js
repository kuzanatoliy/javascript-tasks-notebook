module.exports = {
  getPermutation: (num, k) => {
    if (k < num / 2) {
      const res = [];
      for (let j = 1; j <= k; j++) {
        res.push(j);
        res.push(num - j + 1);
      }
      for (let jj = num - k; jj > k; jj--) {
        res.push(jj);
      }
      return res;
    }
    return [-1];
  },
};
