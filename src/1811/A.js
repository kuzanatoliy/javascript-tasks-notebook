module.exports = {
  getNewNumber: (string, number) => {
    let j = 0;
    let newString = '';
    while (j < string.length && +string[j] >= number) {
      newString += string[j];
      j++;
    }
    newString += number;
    while (j < string.length) {
      newString += string[j];
      j++;
    }
    return newString;
  },
};
