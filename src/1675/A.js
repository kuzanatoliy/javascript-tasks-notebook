module.exports = {
  hasEnoughFood: (a, b, c, x, y) => {
    x -= a;
    y -= b;
    return (x < 0 ? 0 : x) + (y < 0 ? 0 : y) - c > 0 ? 'NO' : 'YES';
  },
};
