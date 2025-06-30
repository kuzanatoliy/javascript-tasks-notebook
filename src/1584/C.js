module.exports = {
  isItPossibleToTransform: (arrA, arrB) => {
    arrA.sort((a, b) => a - b);
    arrB.sort((a, b) => a - b);
    for (let j = 0; j < arrA.length; j++) {
      if (arrA[j] !== arrB[j] && arrA[j] + 1 !== arrB[j]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
