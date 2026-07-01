module.exports = {
  isItPossibleToTransform: (arr) => {
    arr.sort((a, b) => b - a);
    for (let j = 2; j < arr.length; j++) {
      if (arr[j - 2] % arr[j - 1] !== arr[j]) {
        return [-1];
      }
    }
    return [arr[0], arr[1]];
  },
};
