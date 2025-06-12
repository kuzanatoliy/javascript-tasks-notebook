/* eslint-disable sort-keys */
const weights = {
  Q: 9,
  R: 5,
  B: 3,
  N: 3,
  P: 1,
  q: 9,
  r: 5,
  b: 3,
  n: 3,
  p: 1,
};

module.exports = {
  getWinner: (map) => {
    let w1 = 0;
    let w2 = 0;
    for (let j = 0; j < 8; j++) {
      for (let jj = 0; jj < 8; jj++) {
        if (map[j][jj] > 'Z') {
          w2 += weights[map[j][jj]] || 0;
          continue;
        }
        w1 += weights[map[j][jj]] || 0;
      }
    }
    if (w1 > w2) {
      return 'White';
    } else if (w2 > w1) {
      return 'Black';
    } else {
      return 'Draw';
    }
  },
};
