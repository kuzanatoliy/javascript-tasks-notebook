const factorials = [
  1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800, 39916800, 479001600,
];

module.exports = {
  getGCD: (a, b) => factorials[Math.min(a, b) - 1],
};
