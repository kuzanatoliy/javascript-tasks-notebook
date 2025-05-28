module.exports = {
  getCountOfOperations: (a, b, c, d) => {
    const d1 = BigInt(a * d);
    const d2 = BigInt(b * c);
    if (d1 === d2) {
      return 0;
    }
    if (a === 0n || c === 0n || d1 % d2 === 0 || d2 % d1 === 0) {
      return 1;
    }
    return 2;
  },
};
