module.exports = {
  getMap: (matrix) => {
    const l = [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ];

    for (let i = 0; i < 3; i++) {
      matrix[i].forEach((e, j) => {
        e = +e % 2;
        if (e) {
          l[i][j] = Math.abs(l[i][j] - 1);

          if (i > 0) {
            l[i - 1][j] = Math.abs(l[i - 1][j] - 1);
          }
          if (i < 2) {
            l[i + 1][j] = Math.abs(l[i + 1][j] - 1);
          }

          if (j > 0) {
            l[i][j - 1] = Math.abs(l[i][j - 1] - 1);
          }
          if (j < 2) {
            l[i][j + 1] = Math.abs(l[i][j + 1] - 1);
          }
        }
      });
    }

    return l;
  },
};
