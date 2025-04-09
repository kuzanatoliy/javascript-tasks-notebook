module.exports = {
  isItPossibleToPlay: (array, s) => {
    const arr = array.sort((a, b) => a - b);
    return arr.reduce((a, b) => a + b, 0) - arr[arr.length - 1] > s
      ? 'NO'
      : 'YES';
  },
};
