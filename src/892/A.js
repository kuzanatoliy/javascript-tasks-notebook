module.exports = {
  isItPossiblePourCola: (arrA, arrB) => {
    const sumA = arrA.reduce((a, b) => a + b);
    arrB.sort((a, b) => b - a);
    const sumB = arrB[0] + arrB[1];
    return sumB < sumA ? 'NO' : 'YES';
  },
};
