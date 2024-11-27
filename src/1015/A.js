/* eslint-disable prefer-destructuring */
module.exports = {
  getPoints: (points, m) => {
    const arr = new Array(m).fill(0).map((_, ind) => ind + 1);
    for (let j = 0; j < points.length; j++) {
      for (let jj = points[j][0]; jj <= points[j][1]; jj++) {
        arr[jj - 1] = 0;
      }
    }
    return arr.filter((item) => item !== 0);
  },
};
