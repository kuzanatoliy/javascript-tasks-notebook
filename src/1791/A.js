const MASK = 'codeforces';

module.exports = {
  checkIfOneIsSum: (letter) => (MASK.indexOf(letter) < 0 ? 'NO' : 'YES'),
};
