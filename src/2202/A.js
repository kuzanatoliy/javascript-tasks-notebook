module.exports = {
  isItPossibleToPass: (x, y) => {
    x -= y < 0 ? -y * 4 : y * 2;
    return x < 0 || x % 3 ? 'NO' : 'YES';
  },
};
