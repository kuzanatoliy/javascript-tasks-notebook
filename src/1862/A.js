const name = 'vika';

module.exports = {
  isItPossibleToRead: (strings) => {
    let k = 0;
    for (let j = 0; j < strings[0].length; j++) {
      for (let jj = 0; jj < strings.length; jj++) {
        if (strings[jj][j] === name[k]) {
          k++;
          break;
        }
      }
    }
    return name.length === k ? 'YES' : 'NO';
  },
};
