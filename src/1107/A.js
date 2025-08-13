module.exports = {
  isItPossibleToSplit: (snum) => {
    if (snum.length === 2 && snum[0] >= snum[1]) {
      return ['NO'];
    } else {
      return ['YES', [snum.slice(0, 1), snum.slice(1)]];
    }
  },
};
