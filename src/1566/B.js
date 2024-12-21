module.exports = {
  getMinSum: (map) =>
    Math.min(map.split('1').filter((item) => item.length).length, 2),
};
