module.exports = {
  getCountOfSteps: (num, m, r, c) =>
    m * (num - r) + num * m - ((r - 1) * m + c) - (num - r),
};
