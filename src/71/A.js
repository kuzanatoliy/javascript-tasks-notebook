module.exports = {
  convertLongWord: (word) =>
    word.length > 10
      ? word[0] + (word.length - 2) + word[word.length - 1]
      : word,
};
