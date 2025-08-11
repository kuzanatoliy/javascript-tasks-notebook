module.exports = {
  isItBarking: (t, s, x) => {
    const d = x - t;
    if (d === 0) {
      return 'YES';
    } else if (d === 1 || d < 0) {
      return 'NO';
    } else {
      const ans = d % s;
      return ans === 0 || ans === 1 ? 'YES' : 'NO';
    }
  },
};
