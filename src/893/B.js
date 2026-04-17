module.exports = {
  getGreatestBeautifulDivisor: (num) => {
    const ret = [32640, 8128, 2016, 496, 120, 28, 6];
    for (let j = 0; j < ret.length; j++) {
      if (num % ret[j] === 0) {
        return ret[j];
      }
    }
    return 1;
  },
};
