module.exports = {
  isLukyNum: (snum) => {
    for (let j = 0; j < snum.length; j++) {
      if (!(snum[j] === '4' || snum[j] === '7')) {
        return 'NO';
      }
    }
    if (
      snum
        .slice(0, snum.length / 2)
        .split('')
        .sort()
        .join('') !==
      snum
        .slice(snum.length / 2)
        .split('')
        .sort()
        .join('')
    ) {
      return 'NO';
    }
    return 'YES';
  },
};
