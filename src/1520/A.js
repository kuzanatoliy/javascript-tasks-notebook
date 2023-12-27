module.exports = {
  checkSuspicious: (string) => {
    if (string.length < 3) {
      return 'YES';
    }
    const set = new Set(string[0]);
    let j;
    for (j = 1; j < string.length; j++) {
      if (string[j - 1] === string[j]) {
        continue;
      }
      if (set.has(string[j])) {
        break;
      }
      set.add(string[j]);
    }
    return string.length === j ? 'YES' : 'NO';
  },
};
