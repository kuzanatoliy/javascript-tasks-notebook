module.exports = {
  isItPossibleToConstractMatrix: (tils, m) => {
    if (m % 2) {
      return 'NO';
    }
    for (let j = 0; j < tils.length; j++) {
      if (tils[j][0][1] === tils[j][1][0]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
