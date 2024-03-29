module.exports = {
  itItPossibleToClear: (array) => {
    const f = array[0] % 2;
    let j = 1;
    for (; j < array.length; j++) {
      if (array[j] % 2 !== f) {
        break;
      }
    }
    return array.length === j ? 'YES' : 'NO';
  },
};
