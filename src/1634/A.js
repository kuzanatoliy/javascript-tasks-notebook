module.exports = {
  getCountOfString: (count, string) =>
    count === 0 || string === string.split('').reverse().join('') ? 1 : 2,
};
