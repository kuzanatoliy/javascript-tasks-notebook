module.exports = {
  isItPossibleToEliminateString: (string) => {
    if (string.length % 2) {
      return 'NO';
    }
    const keys = { A: 0, B: 0, C: 0 };
    for (let j = 0; j < string.length; j++) {
      keys[string[j]]++;
    }
    return keys.A + keys.C === keys.B ? 'YES' : 'NO';
  },
};
