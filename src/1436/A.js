module.exports = {
  isItPossibleToReorder: (arr, m) =>
    arr.reduce((a, b) => a + b) === m ? 'YES' : 'NO',
};
