module.exports = {
  isItPossibleToSort: (elems, types) => {
    let typeOne = types[0] === 1 ? 1 : 0;
    let typeZero = 1 - typeOne;
    let isSorted = true;
    for (let j = 1; j < types.length; j++) {
      isSorted = isSorted && elems[j] >= elems[j - 1];
      if (types[j] === 1) {
        typeOne++;
      } else {
        typeZero++;
      }
    }
    return isSorted || (typeOne !== 0 && typeZero !== 0) ? 'YES' : 'NO';
  },
};
