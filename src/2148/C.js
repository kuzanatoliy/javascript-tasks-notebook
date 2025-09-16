module.exports = {
  getCountOfPoints: (points, max) => {
    let curr = [0, 0];
    for (let j = 0; j < points.length; j++) {
      const d = points[j][0] - curr[0];
      if (curr[1] === points[j][1]) {
        max -= d % 2 === 1;
      } else {
        max -= d % 2 === 0;
      }
      curr = points[j];
    }
    return max;
  },
};
