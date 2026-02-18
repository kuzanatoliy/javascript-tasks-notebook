module.exports = {
  isItPossibleToTransform: (arr) =>
    arr[0] !== arr.length && arr[arr.length - 1] !== arr.length
      ? [-1]
      : arr.reverse(),
};
