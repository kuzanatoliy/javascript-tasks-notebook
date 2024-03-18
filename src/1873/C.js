const MAP = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1],
  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
  [1, 2, 3, 4, 5, 5, 4, 3, 2, 1],
  [1, 2, 3, 4, 4, 4, 4, 3, 2, 1],
  [1, 2, 3, 3, 3, 3, 3, 3, 2, 1],
  [1, 2, 2, 2, 2, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

module.exports = {
  getTotalPoints: (target) => {
    let points = 0;
    for (let j = 0; j < target.length; j++) {
      for (let jj = 0; jj < target[j].length; jj++) {
        if (target[j][jj] === 'X') {
          points += MAP[j][jj];
        }
      }
    }
    return points;
  },
};
