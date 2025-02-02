module.exports = {
  getMaxCountOfOrnaments: (y, b, r) => Math.min(y, b - 1, r - 2) * 3 + 3,
};
