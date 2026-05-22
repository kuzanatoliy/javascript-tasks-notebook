module.exports = {
  isItPossibleToSplit: (arr) =>
    arr.length % 2 && arr[0] % 2 && arr[arr.length - 1] % 2 ? 'YES' : 'NO',
};
