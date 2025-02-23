/* eslint-disable max-params */
module.exports = {
  getDistance: (x1, y1, x2, y2, x3, y3) => {
    if (y1 === y2 && y3 < y2) {
      return Math.abs(x1 - x2);
    } else if (y2 === y3 && y1 < y2) {
      return Math.abs(x2 - x3);
    } else if (y1 === y3 && y2 < y1) {
      return Math.abs(x1 - x3);
    }
    return 0;
  },
};
