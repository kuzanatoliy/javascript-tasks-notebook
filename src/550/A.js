module.exports = {
  isItPossibleToDetermine: (string) => {
    let newString = string.replace('AB', '*').replace('BA', '*');
    if (string.length - newString.length === 2) {
      return 'YES';
    }
    newString = string.replace('BA', '*').replace('AB', '*');
    return string.length - newString.length === 2 ? 'YES' : 'NO';
  },
};
