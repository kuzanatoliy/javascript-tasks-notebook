const gcd = (a, b) => {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  if (a < b) {
    const r = a;
    a = b;
    b = r;
  }

  while (a) {
    const r = b % a;
    b = a;
    a = r;
  }
  return b;
};

module.exports = {
  getMinCost: (a, b, k) => {
    const d = gcd(a, b);
    if (a / d <= k && b / d <= k) {
      return 1;
    }
    return 2;
  },
};
