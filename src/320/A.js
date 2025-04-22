module.exports = {
  isMagicNumber: (snum) => {
    if (snum[0] === '4' || snum.includes('444')) {
      return 'NO';
    }
    for (let j = 0; j < snum.length; j++) {
      if (snum[j] !== '1' && snum[j] !== '4') {
        return 'NO';
      }
    }
    return 'YES';
  },
};
