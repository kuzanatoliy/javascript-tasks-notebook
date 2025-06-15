/* eslint-disable no-implicit-globals */
module.exports = {
  isItPossibleToReorder: (arr) => {
    const n = arr.length;
    const p = arr;
    const pos = [];
    for (let i = 0; i < n; i++) {
      pos[p[i] - 1] = i;
    }
    for (let k = 1; k <= n; k++) {
      let i = pos[k - 1];
      while (i > k - 1) {
        if (i > 0 && Math.abs(p[i] - p[i - 1]) === 1) {
          pos[p[i] - 1] = i - 1;
          pos[p[i - 1] - 1] = i;
          const ans = p[i];
          p[i] = p[i - 1];
          p[i - 1] = ans;
          i--;
        } else {
          return 'NO';
        }
      }
    }
    return 'YES';
  },
};
