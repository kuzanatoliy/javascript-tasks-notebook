module.exports = {
  getCountOfShots: (center, points) => {
    let temp = [];
    let c = 0;
    while (points.length > 1) {
      c++;
      for (let j = 1; j < points.length; j++) {
        if (
          (points[0][0] - center[0]) * (points[j][1] - center[1]) !==
          (points[j][0] - center[0]) * (points[0][1] - center[1])
        ) {
          temp.push(points[j]);
        }
      }
      points = temp;
      temp = [];
    }
    c += points.length;
    return c;
  },
};
