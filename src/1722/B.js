module.exports = {
  isIdenticalRows: (row1, row2) => {
    for (let j = 0; j < row1.length; j++) {
      if ((row1[j] === 'R' || row2[j] === 'R') && row1[j] !== row2[j]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
