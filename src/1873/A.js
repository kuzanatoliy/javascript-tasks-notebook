const ABC = 'abc';

module.exports = {
  isItPossibleToMakeRow: (string) => {
    let sum = 0;
    for (let j = 0; j < 3; j++) {
      if (string[j] !== ABC[j]) {
        sum++;
      }
    }
    return sum <= 2 ? 'YES' : 'NO';
  },
};
