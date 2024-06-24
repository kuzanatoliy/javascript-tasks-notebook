module.exports = {
  getSwapedWords: (words) => [
    words[1][0] + words[0][1] + words[0][2],
    words[0][0] + words[1][1] + words[1][2],
  ],
};
