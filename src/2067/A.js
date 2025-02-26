module.exports = {
  isItCorrect: (x, y) => {
    const d = x + 1 - y;
    return d < 0 || d % 9 > 0 ? 'NO' : 'YES';
  },
};
