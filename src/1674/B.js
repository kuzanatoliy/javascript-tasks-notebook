module.exports = {
  getWordNumber: (string) =>
    (string[0].charCodeAt() - 97) * 25 +
    (string[0] > string[1]
      ? string[1].charCodeAt() - 96
      : string[1].charCodeAt() - 97),
};
