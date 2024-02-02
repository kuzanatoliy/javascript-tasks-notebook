module.exports = {
  getAriaOfTheSquare: (point1, point2, point3, point4) =>
    (Math.max(point1[0], point2[0], point3[0], point4[0]) -
      Math.min(point1[0], point2[0], point3[0], point4[0])) *
    (Math.max(point1[1], point2[1], point3[1], point4[1]) -
      Math.min(point1[1], point2[1], point3[1], point4[1])),
};
