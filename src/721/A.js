module.exports = {
  getRow: (map) =>
    map
      .split('W')
      .filter((item) => item.length)
      .map((item) => item.length),
};
