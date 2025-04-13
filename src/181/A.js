module.exports = {
  getPoint: (matrix) => {
    const points = [];
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (matrix[j][jj] === '*') {
          points.push([j + 1, jj + 1]);
        }
      }
    }
    const res = [];
    if (points[0][0] === points[1][0]) {
      res.push(points[2][0]);
    } else if (points[0][0] === points[2][0]) {
      res.push(points[1][0]);
    } else {
      res.push(points[0][0]);
    }
    if (points[0][1] === points[1][1]) {
      res.push(points[2][1]);
    } else if (points[0][1] === points[2][1]) {
      res.push(points[1][1]);
    } else {
      res.push(points[0][1]);
    }
    return res;
  },
};
