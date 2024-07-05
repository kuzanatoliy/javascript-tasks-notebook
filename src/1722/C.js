module.exports = {
  getNumberOfPoints: (matrix) => {
    const map = {};
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        map[matrix[j][jj]] = (map[matrix[j][jj]] || 0) + 1;
      }
    }
    const res = [];
    for (let j = 0; j < matrix.length; j++) {
      let points = 0;
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (map[matrix[j][jj]] === 1) {
          points += 3;
          continue;
        }
        if (map[matrix[j][jj]] === 2) {
          points += 1;
          continue;
        }
      }
      res.push(points);
    }
    return res;
  },
};
