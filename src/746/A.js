module.exports = {
  getMaxTotalCount: (a, b, c) =>
    Math.min(a, Math.floor(b / 2), Math.floor(c / 4)) * 7,
};
