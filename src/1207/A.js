module.exports = {
  getMaxIncome: (b, p, f, h, c) => {
    b = Math.floor(b / 2);
    let income = 0;
    if (h > c) {
      const count = Math.min(b, p);
      b -= count;
      income = count * h + Math.min(b, f) * c;
    } else {
      const count = Math.min(b, f);
      b -= count;
      income = count * c + Math.min(b, p) * h;
    }
    return income;
  },
};
