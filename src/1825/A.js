module.exports = {
  getStringLength: (str) =>
    new Set(str.split('')).size === 1 ? -1 : str.length - 1,
};
