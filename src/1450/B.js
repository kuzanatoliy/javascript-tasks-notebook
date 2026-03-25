module.exports = {
  getCountOfOperations: (k, points) => {
    const matrix = [];
    let point;
    let point1;
    let dist;
    let isPossible = false;
    let conn = 0;
    const rCheck = [];

    for (let j = 0; j < points.length; j++) {
      matrix[j] = [];
      point = points[j];
      conn = 0;
      rCheck.push(0);

      for (let l = 0; l < points.length; l++) {
        point1 = points[l];
        matrix[j][l] = 0;
        dist = Math.abs(point[0] - point1[0]) + Math.abs(point[1] - point1[1]);
        if (dist <= k) {
          matrix[j][l] = 1;
          conn += 1;
        }
      }

      if (conn === points.length) {
        isPossible = true;
        break;
      }
    }

    return isPossible ? 1 : -1;
  },
};
