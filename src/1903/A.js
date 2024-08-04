module.exports = {
  isItPossibleToSort: (array, k) => {
    if (k > 1) {
      return 'YES';
    }
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
