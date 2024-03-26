module.exports = {
  getMaxValueOfExpression: (x, y, z) =>
    Math.max(x + y + z, (x + y) * z, x * (y + z), x * y * z),
};
