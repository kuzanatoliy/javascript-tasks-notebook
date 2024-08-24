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
  getWinner: (a, b, c) => {
    let res = true;
    while (c > 0) {
      c -= gcd(res ? a : b, c);
      res = !res;
    }
    return +res;
  },
};
