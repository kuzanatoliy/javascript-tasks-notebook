module.exports = {
  isItPossibleToTransform: (arr) => {
    for (let j = 1; j < arr.length; j++) {
      const min = Math.min(arr[j - 1], arr[j]);
      arr[j - 1] -= min;
      arr[j] -= min;
      if (arr[j - 1] > arr[j]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
