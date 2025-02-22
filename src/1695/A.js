module.exports = {
  getAria: (matrix) => {
    let mr = 0;
    let mc = 0;
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (matrix[j][jj] > matrix[mr][mc]) {
          mr = j;
          mc = jj;
        }
      }
    }
    return (
      Math.max(mr + 1, matrix.length - mr) *
      Math.max(mc + 1, matrix[0].length - mc)
    );
  },
};
