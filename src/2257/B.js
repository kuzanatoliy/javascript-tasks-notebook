module.exports = {
  getWinner: (arrA, arrB) =>
    arrA[0] + arrA.length - 1 >= arrB[0] + arrB.length - 1 ? 1 : 2,
};
