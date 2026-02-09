module.exports = {
  getMaxValue: (str, k, ws) => {
    let res = 0;
    for (let j = 0; j < str.length; j++) {
      res += (j + 1) * ws[str.charCodeAt(j) - 97];
    }
    const val = Math.max(...ws);
    for (let jj = 1; jj <= k; jj++) {
      res += (jj + str.length) * val;
    }
    return res;
  },
};
