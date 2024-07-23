module.exports = {
  isItPossibleToGetPermutation: (array) => {
    const arr = array.sort((a, b) => b - a);
    const flags = new Array(array.length);

    for (let j = 0; j < arr.length; j++) {
      while (arr[j] > array.length || flags[arr[j] - 1]) {
        arr[j] >>= 1;
        if (arr[j] === 0) {
          return 'NO';
        }
      }
      flags[arr[j] - 1] = true;
    }

    return 'YES';
  },
};
