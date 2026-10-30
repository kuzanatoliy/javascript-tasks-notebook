module.exports = {
  isItPossibleToBuild: (a, b, c, m) => {
    const props = [a, b, c].sort((i1, i2) => i1 - i2);
    return props[2] - props[1] - props[0] - 1 <= m && a + b + c - 3 >= m
      ? 'YES'
      : 'NO';
  },
};
