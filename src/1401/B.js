/* eslint-disable max-params */
module.exports = {
  getMaxSum: (x1, y1, z1, x2, y2, z2) => {
    let sum = 0;
    const min = Math.min(z1, y2);
    sum += min * 2;
    z1 -= min;
    sum -= Math.max(0, z2 - z1 - x1) * 2;
    return sum;
  },
};
