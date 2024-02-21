module.exports = {
  isItPossibleToGetOddSum: (array) => {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 === 1) {
        count++;
      }
    }
    return (array.length % 2 === 0 && array.length === count) || count === 0
      ? 'NO'
      : 'YES';
  },
};
