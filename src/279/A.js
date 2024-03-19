/* eslint-disable complexity */
module.exports = {
  getCountOfTurns: (x, y) => {
    if ((Math.abs(x) < Math.abs(y) && y > 0) || (-x === y && y > 0)) {
      return Math.abs(y * 4) - 2;
    }
    if ((Math.abs(x) > Math.abs(y) && x < 0) || (x === y && x < 0)) {
      return Math.abs(x * 4) - 1;
    }
    if (
      (Math.abs(x) < Math.abs(y) && y < 0) ||
      (-x === y && y < 0) ||
      x === -y + 1
    ) {
      return Math.abs(y * 4);
    }
    if ((Math.abs(x) > Math.abs(y) && x > 0) || (x === y && x > 0)) {
      return Math.abs((x - 1) * 4) + 1;
    }

    return 0;
  },
};
