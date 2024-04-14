module.exports = {
  isItPossibleToChangeArray: (d, array) => {
    array.sort((a, b) => a - b);
    return array[array.length - 1] <= d ||
      (array.length > 2 && array[0] + array[1] <= d)
      ? 'YES'
      : 'NO';
  },
};
