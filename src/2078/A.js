module.exports = {
  isItPossibleToTransfomr: (arr, k) =>
    arr.reduce((a, b) => a + b, 0) / arr.length === k ? 'YES' : 'NO',
};
