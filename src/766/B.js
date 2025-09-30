module.exports = {
  isItPossibleToBuildTriangle: (arr) => {
    arr.sort((a, b) => a - b);
    for (let j = 2; j < arr.length; j++) {
      if (arr[j - 2] + arr[j - 1] > arr[j]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
