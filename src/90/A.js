module.exports = {
  getTime: (r, g, b) =>
    Math.max(
      Math.ceil(r / 2 - 1) * 3,
      Math.ceil(g / 2 - 1) * 3 + 1,
      Math.ceil(b / 2 - 1) * 3 + 2
    ) + 30,
};
