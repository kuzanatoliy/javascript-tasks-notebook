module.exports = {
  getWord: (strings) => {
    let word = '';
    let j = 0;
    while (j < strings.length && strings[j] === '........') {
      j++;
    }
    let jj = 0;
    while (jj < strings[j].length && strings[j][jj] === '.') {
      jj++;
    }
    while (j < strings.length && strings[j][jj] !== '.') {
      word += strings[j][jj];
      j++;
    }
    return word;
  },
};
