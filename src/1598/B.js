/* eslint-disable eqeqeq */
/* eslint-disable max-depth */
module.exports = {
  isItPossibleToSplit: (list) => {
    const N = list.length;
    let isOK = false;
    for (let i = 0; i < 4; i++) {
      for (let j = i + 1; j < 5; j++) {
        let ato = 0;
        let L = 0;
        let R = 0;
        let isNG = false;
        for (let k = 0; k < N; k++) {
          if (list[k][i] == 1 && list[k][j] == 1) {
            ato++;
          } else if (list[k][i] == 1 && list[k][j] == 0) {
            L++;
          } else if (list[k][i] == 0 && list[k][j] == 1) {
            R++;
          } else {
            isNG = true;
            break;
          }
        }
        if (!isNG) {
          if (L <= N / 2 && R <= N / 2 && L + R + ato == N) {
            isOK = true;
          }
        }
      }
    }
    return isOK ? 'YES' : 'NO';
  },
};
