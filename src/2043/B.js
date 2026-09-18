module.exports = {
  getDigits: (num, d) => {
    const res = [1];
    if (num >= 3 || (num === 2 && d % 3 === 0)) {
      res.push(3);
    }
    if (d === 5) {
      res.push(5);
    }
    if (num >= 3 || (num === 2 && d === 7)) {
      res.push(7);
    }

    if (
      num >= 6 ||
      (num >= 3 && num <= 5 && d % 3 === 0) ||
      (num === 2 && d === 9)
    ) {
      res.push(9);
    }
    return res;
  },
};
