module.exports = {
  isItPossibleToBuild: (num) => {
    const t = num % 14;
    const d = num / 14;
    return t >= 1 && t <= 6 && d >= 1 ? 'YES' : 'NO';
  },
};
