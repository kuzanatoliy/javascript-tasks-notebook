module.exports = {
  isItPossibleToTurnArray: (arr) => {
    const sum = arr.reduce((a, b) => a + b);
    if (sum % arr.length > 0 || arr.indexOf(sum / arr.length) === -1) {
      return 'NO';
    }
    return 'YES';
  },
};
