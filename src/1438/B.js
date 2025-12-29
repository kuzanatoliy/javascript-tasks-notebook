module.exports = {
  areExistedSubarrays: (arr) =>
    new Set(arr).size === arr.length ? 'NO' : 'YES',
};
