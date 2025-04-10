/* eslint-disable max-params */
module.exports = {
  isNotGreater: (x, y, z, t1, t2, t3) =>
    Math.abs(x - y) * t1 < Math.abs(x - y) * t2 + Math.abs(x - z) * t2 + 3 * t3
      ? 'NO'
      : 'YES',
};
