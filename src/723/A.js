module.exports = {
  getMinDistance: (point1, point2, point3) =>
    Math.max(point1, point2, point3) - Math.min(point1, point2, point3),
};
