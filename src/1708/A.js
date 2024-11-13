module.exports = {
  isItPossibleToChangeArray: (arr) => {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] % arr[0] !== 0) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
