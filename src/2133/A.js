module.exports = {
  isItPossibleToTransformArray: (arr) =>
    new Set(arr).size === arr.length ? 'NO' : 'YES',
};
