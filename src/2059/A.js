module.exports = {
  isItPossibleToTransform: (arrA, arrB) =>
    new Set(arrA).size + new Set(arrB).size > 3 ? 'YES' : 'NO',
};
