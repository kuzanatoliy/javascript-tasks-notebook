module.exports = {
  isItPossibleToCreate: (r, b, k) =>
    Math.abs(r - b) / Math.min(r, b) > k ? 'NO' : 'YES',
};
