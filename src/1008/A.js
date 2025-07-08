module.exports = {
  isBerlaneseWord: (str) => {
    for (let j = 0; j < str.length; j++) {
      if (
        str[j] !== 'n' &&
        str[j] !== 'a' &&
        str[j] !== 'o' &&
        str[j] !== 'u' &&
        str[j] !== 'i' &&
        str[j] !== 'e' &&
        str[j + 1] !== 'a' &&
        str[j + 1] !== 'o' &&
        str[j + 1] !== 'u' &&
        str[j + 1] !== 'i' &&
        str[j + 1] !== 'e'
      ) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
