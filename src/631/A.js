module.exports = {
  getMaxSum: (arrA, arrB) =>
    arrA.reduce((sum, a) => sum | a, 0) + arrB.reduce((sum, b) => sum | b, 0),
};
