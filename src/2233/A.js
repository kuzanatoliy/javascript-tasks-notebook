module.exports = {
  getTime: (num, x, y, z) => {
    if (num > (x + y) * z) {
      return Math.min(
        z + Math.ceil((num - x * z) / (x + 10 * y)),
        Math.ceil(num / (x + y))
      );
    } else {
      return Math.ceil(num / (x + y));
    }
  },
};
