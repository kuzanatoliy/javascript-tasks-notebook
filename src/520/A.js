module.exports = {
  checkPangram: (pangram) =>
    new Set(pangram.toLowerCase().split('')).size !== 26 ? 'NO' : 'YES',
};
