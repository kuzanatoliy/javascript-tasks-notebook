module.exports = {
  getCountOfGlasses: (count, time) => {
    const p = new Array(count + 1)
      .fill(0)
      .map(() => new Array(count + 1).fill(0));

    p[0][0] = time;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j <= i; j++) {
        const remain = (p[i][j] - 1.0) / 2.0;
        if (remain > 0) {
          p[i + 1][j] = p[i + 1][j] + remain;
          p[i + 1][j + 1] = p[i + 1][j + 1] + remain;
        }
      }
    }

    let c = 0;

    for (let i = 0; i < count; i++) {
      for (let j = 0; j <= i; j++) {
        if (p[i][j] >= 1) {
          c++;
        }
      }
    }

    return c;
  },
};
