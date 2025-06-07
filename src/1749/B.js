module.exports = {
  getMaxSum: (arrA, arrB) =>
    arrA.reduce((a, b) => a + b, 0) +
    arrB.reduce((a, b) => a + b, 0) -
    Math.max(...arrB),
};
