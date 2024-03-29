// eslint-disable-next-line require-unicode-regexp
const DEL = /R+/;

module.exports = {
  getMinPossibleValue: (string) =>
    Math.max(...string.split(DEL).map((item) => item.length)) + 1,
};
