module.exports = {
  isLittleKWinner: (x, y, a) => {
    a += 0.5;
    const d = a % (x + y);
    return d > x ? 'YES' : 'NO';
  },
};
