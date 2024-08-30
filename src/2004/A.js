module.exports = {
  isItPossibleToAddPoint: (array) =>
    array.length > 2 || Math.abs(array[0] - array[1]) === 1 ? 'NO' : 'YES',
};
