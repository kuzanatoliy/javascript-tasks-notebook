module.exports = {
  getLength: (points) => {
    let max = points[0][0] + points[0][1];
    for (let j = 1; j < points.length; j++) {
      const d = points[j][0] + points[j][1];
      if (d > max) {
        max = d;
      }
    }
    return max;
  },
};
