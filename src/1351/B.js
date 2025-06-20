module.exports = {
  isItPossibleToCut: (s1, s2) => {
    const d = Math.min(...s1) + Math.min(...s2);
    const m1 = Math.max(...s1);
    const m2 = Math.max(...s2);
    return d === m1 && d === m2 ? 'YES' : 'NO';
  },
};
