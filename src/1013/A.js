module.exports = {
  canRecordsBeConsistens: (arr1, arr2) =>
    arr1.reduce((a, b) => a + b, 0) < arr2.reduce((a, b) => a + b, 0)
      ? 'NO'
      : 'YES',
};
