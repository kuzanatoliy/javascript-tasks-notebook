module.exports = {
  getCost: (a, b, num, m) => {
    if (a < b) {
      let sum = a * num;
      const c = num / (m + 1n);
      sum -= a * c;
      return sum;
    }
    if (num > m) {
      const d1 = m * a;
      const d2 = (m + 1n) * b;
      if (d2 > d1) {
        return d1 * (num / (m + 1n)) + (num % (m + 1n)) * b;
      }
      return num * b;
    }
    return b * num;
  },
};
