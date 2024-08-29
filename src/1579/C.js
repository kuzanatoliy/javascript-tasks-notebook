/* eslint-disable no-multi-assign */
/* eslint-disable max-depth */
/* eslint-disable guard-for-in */
/* eslint-disable complexity */
module.exports = {
  couldFieldBeObtained: (n, m, k, field) => {
    for (const i in field) {
      for (const j in field[i]) {
        field[i][j] = field[i][j] === '*' ? 1 : 0;
      }
    }

    for (let i = n - 1; i >= k; i--) {
      for (let j = k; j < m - k; j++) {
        if (field[i][j]) {
          let d = 1;
          while (
            i - d >= 0 &&
            j - d >= 0 &&
            j + d < m &&
            field[i - d][j - d] &&
            field[i - d][j + d]
          ) {
            d++;
          }
          d--;
          if (d >= k) {
            while (d >= 0) {
              field[i - d][j - d] = field[i - d][j + d] = 2;
              d--;
            }
          }
        }
      }
    }

    let ans = true;
    for (const i in field) {
      for (const j in field[i]) {
        ans = ans && field[i][j] !== 1;
      }
    }

    return ans ? 'YES' : 'NO';
  },
};
