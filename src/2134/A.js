module.exports = {
  isItPossibleToPaint: (num, a, b) => {
    if (a <= b) {
      return (num & 1) === (b & 1) ? 'YES' : 'NO';
    } else {
      const d = a - b;
      if (d & 1) {
        return 'NO';
      }
      return (num & 1) === (b & 1) ? 'YES' : 'NO';
    }
  },
};
