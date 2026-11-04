/* eslint-disable no-undefined */
module.exports = {
  getPairsCount: (arr) => {
    const freq = {};
    const values = [];
    let ans = 0;

    for (let x = 0; x + 4 < arr.length; x++) {
      const value = arr[x] + arr[x + 2] - arr[x + 4];
      if (freq[value] !== undefined) {
        ans += freq[value];
      }
      if (x >= 2 && values[x - 2] === value) {
        ans--;
      }
      if (x >= 4 && values[x - 4] === value) {
        ans--;
      }
      values[x] = value;
      if (freq[value] === undefined) {
        freq[value] = 0;
      }
      freq[value]++;
    }

    return ans;
  },
};
