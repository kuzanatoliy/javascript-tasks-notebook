module.exports = {
  isItPossibleToTransform: (arr) => {
    for (let j = 2; j < arr.length; j++) {
      if (arr[j - 2] > arr[j - 1] && arr[j - 1] < arr[j]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
