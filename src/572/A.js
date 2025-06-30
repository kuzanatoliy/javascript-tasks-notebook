module.exports = {
  isItPossibleToChoose: (k, m, arrA, arrB) =>
    arrA[k - 1] < arrB[arrB.length - m] ? 'YES' : 'NO',
};
