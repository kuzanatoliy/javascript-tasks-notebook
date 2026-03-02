module.exports = {
  isItPossibleToTransform: (s, x, arr) => {
    const sum = arr.reduce((a, b) => a + b, 0);
    return s < sum || (s - sum) % x > 0 ? 'NO' : 'YES';
  },
};
