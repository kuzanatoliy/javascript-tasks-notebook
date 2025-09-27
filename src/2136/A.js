module.exports = {
  isItPossibleResult: (a, b, c, d) => {
    let border = Math.min(a, b) * 2 + 2;
    if (a > border || b > border) {
      return 'NO';
    }
    c -= a;
    d -= b;
    border = Math.min(c, d) * 2 + 2;
    if (c > border || d > border) {
      return 'NO';
    }
    return 'YES';
  },
};
