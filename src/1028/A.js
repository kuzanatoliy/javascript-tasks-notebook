module.exports = {
  getCenter: (matrix) => {
    const points = [];
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (matrix[j][jj] === 'B') {
          points.push([j + 1, jj + 1]);
        }
      }
    }
    return points[Math.floor(points.length / 2)];
  },
};
