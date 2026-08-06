module.exports = {
  isItPossibleToTransform: (arr) => {
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      const target = j + 1;
      sum += arr[j];
      if (sum < target) {
        return 'NO';
      }
      sum -= target;
    }
    return 'YES';
  },
};
