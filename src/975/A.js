module.exports = {
  getCountOfRootWords: (words) =>
    new Set(
      words
        .map((item) => new Set(item))
        .filter((item, ind) => item.size === words[ind].length)
        .map((item) => Array.from(item).sort().join(''))
    ).size,
};
