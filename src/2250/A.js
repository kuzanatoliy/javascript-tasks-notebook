module.exports = {
  isItPossibleToTransform: (arr) => {
    if (arr.length % 2) {
      return 'NO';
    }
    let min = Infinity;
    let max = -Infinity;
    for (let j = 0; j < arr.length; j += 2) {
      if (min > arr[j]) {
        min = arr[j];
      }
    }
    for (let j = 1; j < arr.length; j += 2) {
      if (max < arr[j]) {
        max = arr[j];
      }
    }
    return min - max > 1 ? 'YES' : 'NO';
  },
};
