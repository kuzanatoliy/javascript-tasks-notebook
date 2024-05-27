module.exports = {
  isItPossibleToWin: (a, b, c) => {
    const sum = a + b + c;
    return sum % 9 === 0 && Math.min(a, b, c) >= sum / 9 ? 'YES' : 'NO';
  },
};
