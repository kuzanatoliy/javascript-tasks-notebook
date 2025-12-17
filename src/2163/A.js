module.exports = {
  isItPossibleToWin: (arr) => {
    arr.sort((a, b) => a - b);
    for (let j = 1; j < arr.length - 1; j += 2) {
      if (arr[j] !== arr[j + 1]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
