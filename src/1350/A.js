module.exports = {
  getTransformedNumber: (number, count) => {
    if (number % 2 === 0) {
      return number + 2 * count;
    }

    let f = 3;
    while (number % f !== 0) {
      f += 2;
    }

    return number + f + 2 * (count - 1);
  },
};
