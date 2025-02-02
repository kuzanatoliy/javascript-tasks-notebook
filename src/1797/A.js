/* eslint-disable complexity */
/* eslint-disable max-params */
module.exports = {
  getCountOfCells: (r, c, x1, y1, x2, y2) => {
    if (
      (x1 === 1 && y1 === 1) ||
      (x2 === 1 && y2 === 1) ||
      (x1 === 1 && y1 === c) ||
      (x2 === 1 && y2 === c) ||
      (x1 === r && y1 === 1) ||
      (x2 === r && y2 === 1) ||
      (x1 === r && y1 === c) ||
      (x2 === r && y2 === c)
    ) {
      return 2;
    }
    if (
      x1 === 1 ||
      x2 === 1 ||
      y1 === 1 ||
      y2 === 1 ||
      x1 === r ||
      y1 === c ||
      x2 === r ||
      y2 === c
    ) {
      return 3;
    }
    return 4;
  },
};
