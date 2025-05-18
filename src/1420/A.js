module.exports = {
  isItPossibleToSort: (arr) => {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] <= arr[j]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
