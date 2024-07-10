module.exports = {
  isItPossibleToBuildSquare: (number) => {
    const d = Math.sqrt(number / 2);
    const f = Math.sqrt(number / 4);
    return (d ^ 0) === d || (f ^ 0) === f ? 'YES' : 'NO';
  },
};
