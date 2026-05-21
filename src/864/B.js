module.exports = {
  getMaxCountOfPrettySetElements: (str) =>
    Math.max(
      ...str.split(/[A-Z]/u).map((item) => new Set(item.split('')).size)
    ),
};
