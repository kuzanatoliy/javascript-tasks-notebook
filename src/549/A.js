module.exports = {
  getCountOfFaces: (matrix) => {
    let count = 0;
    for (let j = 1; j < matrix.length; j++) {
      for (let jj = 1; jj < matrix[j].length; jj++) {
        const fls = { a: 0, c: 0, e: 0, f: 0 };
        if (fls[matrix[j - 1][jj - 1]] === 0) {
          fls[matrix[j - 1][jj - 1]]++;
        }
        if (fls[matrix[j][jj - 1]] === 0) {
          fls[matrix[j][jj - 1]]++;
        }
        if (fls[matrix[j - 1][jj]] === 0) {
          fls[matrix[j - 1][jj]]++;
        }
        if (fls[matrix[j][jj]] === 0) {
          fls[matrix[j][jj]]++;
        }
        count += fls.f && fls.a && fls.c && fls.e;
      }
    }
    return count;
  },
};
