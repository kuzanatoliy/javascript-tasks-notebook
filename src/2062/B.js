module.exports = {
  isItPossibleToContinue: (arr) => {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] <= j * 2 || arr[j] <= (arr.length - 1 - j) * 2) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
