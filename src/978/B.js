module.exports = {
  getCountOfRemovedSymbols: (string) => {
    let count = 0;
    for (let j = 2; j < string.length; j++) {
      if (string[j] === 'x' && string[j - 1] === 'x' && string[j - 2] === 'x') {
        count++;
      }
    }
    return count;
  },
};
