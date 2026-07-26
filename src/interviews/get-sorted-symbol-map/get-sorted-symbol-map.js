const getSymbolsMap = (str) => {
  const map = {};
  for (let j = 0; j < str.length; j++) {
    map[str[j]] = (map[str[j]] || 0) + 1;
  }
  return map;
};

module.exports = {
  getSortedSymbolMap: (arr) =>
    Object.entries(getSymbolsMap(arr))
      .sort((a, b) => a[1] - b[1])
      .map((item) => item[0])
      .join(''),
};
