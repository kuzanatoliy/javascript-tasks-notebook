module.exports = {
  getNumbers: (num) => {
    if (num === 10n) {
      return [-1n];
    }
    const r = num % 12n;
    const a = r <= 9n || r === 11n ? r : 22n;
    const b = num - a;
    if (b < 0n) {
      return [-1n];
    }
    return [a, b];
  },
};
