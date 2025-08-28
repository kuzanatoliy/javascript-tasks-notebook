module.exports = {
  getCountOfRootWords: (words) =>
    new Set(
      words
        .map((item) => new Set(item))
        .map((item) => Array.from(item).sort().join(''))
    ).size,
};
