module.exports = {
  isItPossibleToTransform: (arr) => {
    let sum = 0;
    for (let j = 1; j < arr.length; j++) {
      sum += arr[j] - arr[j - 1] - 1;
    }
    return sum > 2 ? 'NO' : 'YES';
  },
};
