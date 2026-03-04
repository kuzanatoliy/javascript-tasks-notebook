module.exports = {
  isNewYearStr: (str) =>
    str.indexOf('2026') > -1 || str.indexOf('2025') === -1 ? 0 : 1,
};
