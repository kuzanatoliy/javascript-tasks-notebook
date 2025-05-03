module.exports = {
  isItCorrectWeight: (num, a, b, c, d) => {
    const min = (a - b) * num;
    const max = (a + b) * num;
    return max < c - d || min > c + d ? 'NO' : 'YES';
  },
};
