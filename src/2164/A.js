module.exports = {
  isItPossibleToGetNumber: (arr, num) =>
    Math.min(...arr) <= num && Math.max(...arr) >= num ? 'YES' : 'NO',
};
