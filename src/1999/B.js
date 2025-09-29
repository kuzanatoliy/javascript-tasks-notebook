module.exports = {
  getCountOfWays: (a1, a2, b1, b2) =>
    ((a1 > b1 && a2 >= b2) +
      (a1 === b1 && a2 > b2) +
      (a1 > b2 && a2 >= b1) +
      (a1 === b2 && a2 > b1)) *
    2,
};
