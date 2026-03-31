/* eslint-disable complexity */
/* eslint-disable max-params */
module.exports = {
  getMatrix: (r1, r2, c1, c2, d1, d2) => {
    const x1 = (d1 + (r1 - c2)) / 2;
    const x2 = (r1 + (c2 - d1)) / 2;
    const x3 = (d2 + (c1 - r1)) / 2;
    const x4 = (r2 + (d1 - c1)) / 2;

    return !Number.isInteger(x1) ||
      !Number.isInteger(x2) ||
      !Number.isInteger(x3) ||
      !Number.isInteger(x4) ||
      x1 === 0 ||
      x2 === 0 ||
      x3 === 0 ||
      x4 === 0 ||
      x1 > 9 ||
      x2 > 9 ||
      x3 > 9 ||
      x4 > 9 ||
      x1 === x2 ||
      x1 === x3 ||
      x1 === x4 ||
      x2 === x3 ||
      x2 === x4 ||
      x3 === x4
      ? [[-1]]
      : [
          [x1, x2],
          [x3, x4],
        ];
  },
};
