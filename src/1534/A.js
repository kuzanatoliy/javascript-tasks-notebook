module.exports = {
  isItPossibleToTurnMatrix: (matrix) => {
    const m1 = [];
    const m2 = [];
    let f1 = true;
    let f2 = true;
    for (let j = 0; j < matrix.length; j++) {
      m1[j] = [];
      m2[j] = [];
      for (let jj = 0; jj < matrix[j].length; jj++) {
        m1[j][jj] = (j + jj) % 2 === 0 ? 'W' : 'R';
        m2[j][jj] = m1[j][jj] === 'W' ? 'R' : 'W';
        f1 = f1 && (m1[j][jj] === matrix[j][jj] || matrix[j][jj] === '.');
        f2 = f2 && (m2[j][jj] === matrix[j][jj] || matrix[j][jj] === '.');
      }
    }
    if (f1) {
      return ['YES', m1];
    }
    if (f2) {
      return ['YES', m2];
    }
    return ['NO'];
  },
};
