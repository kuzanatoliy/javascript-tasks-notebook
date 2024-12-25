module.exports = {
  getMinCountOfPairs: (num) =>
    num + 2 * (Math.floor(num / 2) + Math.floor(num / 3)),
};
