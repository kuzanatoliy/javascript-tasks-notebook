module.exports = {
  isItPossibleToConvert: (string, substring) => {
    for (let j = 0; j < string.length; j++) {
      if (string[j] === substring && j % 2 === 0) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
