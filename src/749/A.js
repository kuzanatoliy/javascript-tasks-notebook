module.exports = {
  getPrimes: (number) => {
    const res = [];

    if (number % 2 === 1) {
      res.push(3);
      number -= 3;
    }

    const count = number / 2;

    for (let i = 0; i < count; i++) {
      res.push(2);
    }

    return res;
  },
};
