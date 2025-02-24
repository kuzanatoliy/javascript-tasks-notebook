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

const lcm = (a, b) => (a * b) / gcd(a, b);

module.exports = {
  getSmallestInteger: (num, m) => lcm(num, m),
};
