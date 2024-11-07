module.exports = {
  getMaxScore: (arr) =>
    (Math.max(...arr) - Math.min(...arr)) * (arr.length - 1),
};
