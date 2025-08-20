module.exports = {
  isItPossibleToRestore: (arrA, arrB) => {
    if (arrB.length > 1) {
      return 'YES';
    }
    for (let j = 1; j < arrA.length; j++) {
      if ((arrA[j - 1] || arrB[0]) > (arrA[j] || arrB[0])) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
