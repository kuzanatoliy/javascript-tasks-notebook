module.exports = {
  getPresentsOrder: (arrA, arrB) => [
    arrA.sort((a, b) => a - b),
    arrB.sort((a, b) => a - b),
  ],
};
