module.exports = {
  isItPossibleToTransform: (arrA, arrB, x) => {
    arrA.sort((a, b) => a - b);
    arrB.sort((a, b) => b - a);
    for (let j = 0; j < arrA.length; j++) {
      if (arrA[j] + arrB[j] > x) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
