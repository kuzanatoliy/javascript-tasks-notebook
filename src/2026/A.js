module.exports = {
  getPoints: (x, y) =>
    x < y
      ? [
          [0, 0, x, x],
          [x, 0, 0, x],
        ]
      : [
          [0, 0, y, y],
          [y, 0, 0, y],
        ],
};
