module.exports = {
  isItPossibleToRecolor: (str) =>
    str.length !== 1 && new Set(str.split('')).size === str.length
      ? 'NO'
      : 'YES',
};
