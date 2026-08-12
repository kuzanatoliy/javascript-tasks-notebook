module.exports = {
  isItPossibleToTransform: (arrA, arrB) => {
    if (arrB.length * 2 > arrA.length) {
      return 'NO';
    }
    arrA.sort((a, b) => b - a);
    arrB.sort((a, b) => b - a);
    for (let jj = 0; jj < arrB.length; jj++) {
      if (
        arrA[jj] < arrB[jj] ||
        arrA[arrA.length - arrB.length + jj] > arrB[jj]
      ) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
