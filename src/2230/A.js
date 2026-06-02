module.exports = {
  getMinAmount: (num, a, b) => {
    if (3 * a < b) {
      return num * a;
    } else if (2 * a < b) {
      return Math.floor(num / 3) * b + (num % 3) * a;
    } else if (a < b) {
      const d = num % 3;
      return Math.floor(num / 3) * b + (d === 2 ? b : d * a);
    } else {
      return Math.ceil(num / 3) * b;
    }
  },
};
