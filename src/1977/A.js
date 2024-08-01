module.exports = {
  isItPossibleToObtainTower: (n, m) => {
    const d = n - m;
    return d >= 0 && d % 2 === 0 ? 'YES' : 'NO';
  },
};
