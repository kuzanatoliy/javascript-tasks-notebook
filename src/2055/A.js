module.exports = {
  isItPossibleToWin: (num, a, b) => (Math.abs(a - b) % 2 === 1 ? 'NO' : 'YES'),
};
