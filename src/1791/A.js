const MASK = 'codeforces';

module.exports = {
  isInCodeforces: (letter) => (MASK.indexOf(letter) < 0 ? 'NO' : 'YES'),
};
