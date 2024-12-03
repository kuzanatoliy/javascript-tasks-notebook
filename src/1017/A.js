/* eslint-disable prefer-destructuring */
module.exports = {
  getRank: (results) => {
    const sums = results.map((item) => item.reduce((a, b) => a + b, 0));
    let r = 1;
    let c = 1;
    while (r < results.length) {
      if (sums[r] > sums[0]) {
        c++;
      }
      r++;
    }
    return c;
  },
};
