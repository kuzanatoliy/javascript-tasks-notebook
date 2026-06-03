module.exports = {
  getOperationCount: (arr) =>
    Math.ceil((Math.max(...arr) - Math.min(...arr)) / 2),
};
