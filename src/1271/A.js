/* eslint-disable max-params */
module.exports = {
  getMaxCost: (a, b, c, d, e, f) => {
    if (e > f) {
      const count = Math.min(a, d);
      d -= count;
      return count * e + Math.min(b, c, d) * f;
    } else {
      const count = Math.min(b, c, d);
      d -= count;
      return Math.min(a, d) * e + count * f;
    }
  },
};
