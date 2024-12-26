module.exports = {
  isItPossibleToSort: (array) => {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j] && 2 ** Math.floor(Math.log2(j)) !== j) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
