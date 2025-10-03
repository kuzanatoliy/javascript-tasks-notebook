module.exports = {
  isItPossibleToTransform: (arr) => {
    for (let j = 2; j < arr.length; j++) {
      arr[j] -= arr[j - 2];
      arr[j - 1] -= arr[j - 2] * 2;
      arr[j - 2] -= arr[j - 2];
      if (arr[j - 1] < 0 || arr[j] < 0) {
        return 'NO';
      }
    }
    return arr[arr.length - 2] !== 0 || arr[arr.length - 1] !== 0
      ? 'NO'
      : 'YES';
  },
};
