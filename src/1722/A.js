module.exports = {
  isSatisfiesCondition: (string) => {
    if (string.length !== 5) {
      return 'NO';
    }
    const flags = {
      T: 0,
      i: 0,
      m: 0,
      r: 0,
      u: 0,
    };
    for (let j = 0; j < string.length; j++) {
      if (flags[string[j]] === 0) {
        flags[string[j]]++;
      } else {
        return 'NO';
      }
    }

    return 'YES';
  },
};
