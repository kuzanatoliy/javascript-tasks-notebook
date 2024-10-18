module.exports = {
  isItPossibleToWin: (row1, row2) => {
    for (let j = 0; j < row1.length; j++) {
      if (row1[j] === '1' && row2[j] === '1') {
        return 'NO';
      }
    }
    return 'YES';
  },
};
