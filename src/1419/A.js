module.exports = {
  getWinner: (snum) => {
    if (snum.length % 2) {
      for (let j = 0; j < snum.length; j += 2) {
        if (
          snum[j] === '1' ||
          snum[j] === '3' ||
          snum[j] === '5' ||
          snum[j] === '7' ||
          snum[j] === '9'
        ) {
          return 1;
        }
      }
      return 2;
    }
    for (let j = 1; j < snum.length; j += 2) {
      if (
        snum[j] === '0' ||
        snum[j] === '2' ||
        snum[j] === '4' ||
        snum[j] === '6' ||
        snum[j] === '8'
      ) {
        return 2;
      }
    }
    return 1;
  },
};
