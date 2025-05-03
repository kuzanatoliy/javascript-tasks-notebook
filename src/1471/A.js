module.exports = {
  getPossibleBeauty: (x, arr) => [
    Math.ceil(arr.reduce((a, b) => a + b, 0) / x),
    arr.reduce((a, b) => a + Math.ceil(b / x), 0),
  ],
};
