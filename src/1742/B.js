module.exports = {
  isItPossibleToSort: (array) =>
    new Set(array).size === array.length ? 'YES' : 'NO',
};
