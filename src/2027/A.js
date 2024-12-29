/* eslint-disable prefer-destructuring */
module.exports = {
  getMinPerimeter: (stamps) => {
    let max1 = stamps[0][0];
    let max2 = stamps[0][1];
    for (let j = 1; j < stamps.length; j++) {
      if (max1 < stamps[j][0]) {
        max1 = stamps[j][0];
      }
      if (max2 < stamps[j][1]) {
        max2 = stamps[j][1];
      }
    }
    return max1 + max1 + max2 + max2;
  },
};
