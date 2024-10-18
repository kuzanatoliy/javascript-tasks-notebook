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
  getNumber: (num) => {
    while (
      gcd(
        num,
        num
          .toString()
          .split('')
          .map(Number)
          .reduce((a, b) => a + b)
      ) === 1
    ) {
      num++;
    }
    return num;
  },
};
