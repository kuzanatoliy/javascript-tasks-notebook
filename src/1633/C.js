/* eslint-disable max-params */
module.exports = {
  isItPossibleToWin: (hc, dc, hm, dm, k, d, h) => {
    for (let j = 0; j <= k; j++) {
      if (Math.ceil((hc + h * j) / dm) >= Math.ceil(hm / (dc + (k - j) * d))) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
