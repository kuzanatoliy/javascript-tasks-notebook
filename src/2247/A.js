module.exports = {
  isItPossibleToTransform: (arr) =>
    arr.reduce((a, b) => a + b, 0) % 4 ? 'NO' : 'YES',
};
