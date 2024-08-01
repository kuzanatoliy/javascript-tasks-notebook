module.exports = {
  isItPossibleToSort: (array) => {
    const sortedArray = [...array].sort((a, b) => a - b);
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 !== sortedArray[j] % 2) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
