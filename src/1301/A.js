module.exports = {
  isItPossibleToTransformStrings: (strA, strB, strC) => {
    for (let j = 0; j < strA.length; j++) {
      if (!(strC[j] === strA[j] || strC[j] === strB[j])) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
