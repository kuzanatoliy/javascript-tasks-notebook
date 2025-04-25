module.exports = {
  getCountOfRemovedSymbols: (str) => {
    let count = 0;
    let j = 0;
    while (j < str.length) {
      if (
        str[j] === 'm' &&
        str[j + 1] === 'a' &&
        str[j + 2] === 'p' &&
        str[j + 3] === 'i' &&
        str[j + 4] === 'e'
      ) {
        count++;
        j += 5;
        continue;
      }
      if (
        (str[j] === 'm' && str[j + 1] === 'a' && str[j + 2] === 'p') ||
        (str[j] === 'p' && str[j + 1] === 'i' && str[j + 2] === 'e')
      ) {
        count++;
        j += 3;
        continue;
      }
      j++;
    }
    return count;
  },
};
