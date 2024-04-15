const gcd = (a, b) => {
  while (a > 0) {
    const temp = a;
    a = b % a;
    b = temp;
  }
  return b;
};

const lcm = (a, b) => (a * b) / gcd(a, b);

module.exports = {
  getIntegers: (x) => {
    const guess = Math.round(Math.sqrt(x));
    for (let j = guess; j >= 1; j--) {
      if (x % j === 0 && x === lcm(j, x / j)) {
        return [j, x / j];
      }
    }
    return [1, x];
  },
};
