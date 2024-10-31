module.exports = {
  isItPossibleToObtainAnotherRectangle: (a, b) => {
    const ad = a % 2;
    const bd = b % 2;
    return (ad === 1 && bd === 1) ||
      (ad === 1 && bd === 0 && b === 2 * a) ||
      (bd === 1 && ad === 0 && a === 2 * b)
      ? 'NO'
      : 'YES';
  },
};
