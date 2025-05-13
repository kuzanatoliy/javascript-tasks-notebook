module.exports = {
  isItPossibleToPaint: (num, m, k) =>
    Math.ceil(num / m) + k < num ? 'YES' : 'NO',
};
