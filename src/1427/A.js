module.exports = {
  isItPossibleToTransformArray: (arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);

    if (sum === 0) {
      return ['NO'];
    } else {
      return [
        'YES',
        sum > 0 ? arr.sort((a, b) => b - a) : arr.sort((a, b) => a - b),
      ];
    }
  },
};
