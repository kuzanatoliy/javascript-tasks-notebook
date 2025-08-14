module.exports = {
  getTime: (points, k) => {
    let res = 0;
    for (let j = 1; j < points.length; j++) {
      res += Math.sqrt(
        Math.abs(points[j][0] - points[j - 1][0]) ** 2 +
          Math.abs(points[j][1] - points[j - 1][1]) ** 2
      );
    }
    return (res / 50) * k;
  },
};
