module.exports = {
  getCountOfSymbols: (string) =>
    Math.max(...string.split('').map((item) => item.charCodeAt())) -
    'a'.charCodeAt() +
    1,
};
