module.exports = {
  isItPossibleToTransform: (arr) => {
    let sum = 0;
    let sj = 0;
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
      sj += j;
      if (sum < sj) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
