module.exports = {
  isItPossibleToColor: (array) => {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[j] % 2 === 1) {
        count++;
      }
    }
    return count % 2 === 0 ? 'YES' : 'NO';
  },
};
