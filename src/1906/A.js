/* eslint-disable max-depth */
const adj = (x, y) => {
  const x1 = x % 3;
  const x2 = Math.floor(x / 3);
  const y1 = y % 3;
  const y2 = Math.floor(y / 3);

  return Math.max(Math.abs(x1 - y1), Math.abs(x2 - y2)) === 1;
};

module.exports = {
  getLowestStr: (str) => {
    let ans = 'ZZZ';
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        for (let k = 0; k < 9; k++) {
          if (adj(i, j) && adj(j, k) && i !== k) {
            const word = str[i] + str[j] + str[k];
            if (word < ans) {
              ans = word;
            }
          }
        }
      }
    }
    return ans;
  },
};
