module.exports = {
  getSubstringLength: (string) => {
    if (string.indexOf('aa') !== -1) {
      return 2;
    }

    if (string.indexOf('aba') !== -1 || string.indexOf('aca') !== -1) {
      return 3;
    }

    if (string.indexOf('abca') !== -1 || string.indexOf('acba') !== -1) {
      return 4;
    }

    if (string.indexOf('abbacca') !== -1 || string.indexOf('accabba') !== -1) {
      return 7;
    }

    return -1;
  },
};
