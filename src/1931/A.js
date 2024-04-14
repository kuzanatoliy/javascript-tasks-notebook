module.exports = {
  getSmallestLetters: (number) => {
    if (number === 3) {
      return 'aaa';
    }
    if (number === 78) {
      return 'zzz';
    }
    if (number > 52) {
      return `${String.fromCharCode(number - 52 + 96)}zz`;
    }
    if (number > 27) {
      return `a${String.fromCharCode(number - 27 + 96)}z`;
    }
    return `aa${String.fromCharCode(number - 2 + 96)}`;
  },
};
