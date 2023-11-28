module.exports = {
  isPalindrom: (word1, word2) =>
    word2.split('').reverse().join('') === word1 ? 'YES' : 'NO',
};
