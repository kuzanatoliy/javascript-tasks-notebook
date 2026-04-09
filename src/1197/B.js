module.exports = {
  isItPossibleToPlace: (arr) => {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[j - 1] > arr[j] && arr[j] < arr[j + 1]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
