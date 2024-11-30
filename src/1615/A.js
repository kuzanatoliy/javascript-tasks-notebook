module.exports = {
  getMinUgliness: (arr) =>
    arr.reduce((a, b) => a + b, 0) % arr.length === 0 ? 0 : 1,
};
