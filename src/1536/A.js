module.exports = {
  isItPossibleToCreateButyArray: (array) => {
    const arr = array.sort((a, b) => a - b);
    if (array[0] < 0) {
      return ['NO'];
    }
    return [
      'YES',
      new Array(arr[arr.length - 1] + 1).fill(0).map((_, ind) => ind),
    ];
  },
};
