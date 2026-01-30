module.exports = {
  isItPossibleToTransform: (strA, strB) => {
    for (let j = 1; j < strA.length; j++) {
      if (
        strA[j - 1] === '0' &&
        strB[j - 1] === '0' &&
        strA[j] === '1' &&
        strB[j] === '1'
      ) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
