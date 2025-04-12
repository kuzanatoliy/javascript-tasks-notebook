const monthes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

module.exports = {
  getMaxColumns: (m, d) => Math.ceil((monthes[m - 1] + d - 1) / 7),
};
