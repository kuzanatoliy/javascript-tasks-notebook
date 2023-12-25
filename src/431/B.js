/* eslint-disable max-depth */
/* eslint-disable max-params */
function dif(a, b, c, d, e) {
  const m = {};
  m[a] = true;
  m[b] = true;
  m[c] = true;
  m[d] = true;
  m[e] = true;
  return Object.keys(m).length === 5;
}

function sum(m, a, b, c, d, e) {
  return (
    0 +
    m[a][b] +
    m[b][a] +
    m[c][d] +
    m[d][c] +
    m[c][b] +
    m[b][c] +
    m[d][e] +
    m[e][d] +
    m[c][d] +
    m[d][c] +
    m[d][e] +
    m[e][d]
  );
}

module.exports = {
  getMaxTotalHappiness: (matrix) => {
    let t = 0;
    for (let a = 0; a < 5; a++) {
      for (let b = 0; b < 5; b++) {
        for (let c = 0; c < 5; c++) {
          for (let d = 0; d < 5; d++) {
            for (let e = 0; e < 5; e++) {
              if (dif(a, b, c, d, e)) {
                t = Math.max(t, sum(matrix, a, b, c, d, e));
              }
            }
          }
        }
      }
    }
    return t;
  },
};
