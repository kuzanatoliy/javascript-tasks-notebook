module.exports = {
  transformMatrix: (matrix) => {
    const points = [];
    for (let j = 0; j < matrix.length; j++) {
      for (let jj = 0; jj < matrix[j].length; jj++) {
        if (matrix[j][jj] === '*') {
          points.push(j, jj);
        }
      }
    }
    if (points[0] === points[2]) {
      if (points[0] !== 0) {
        matrix[0][points[3]] = '*';
        matrix[0][points[1]] = '*';
      } else {
        matrix[matrix.length - 1][points[3]] = '*';
        matrix[matrix.length - 1][points[1]] = '*';
      }
      return matrix;
    }

    if (points[1] === points[3]) {
      if (points[1] !== 0) {
        matrix[points[0]][0] = '*';
        matrix[points[2]][0] = '*';
      } else {
        matrix[points[0]][matrix[0].length - 1] = '*';
        matrix[points[2]][matrix[0].length - 1] = '*';
      }
      return matrix;
    }

    matrix[points[0]][points[3]] = '*';
    matrix[points[2]][points[1]] = '*';
    return matrix;
  },
};
