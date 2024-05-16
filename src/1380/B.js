module.exports = {
  getBetterCombination: (string) => {
    const counts = { P: 0, R: 0, S: 0 };
    for (let j = 0; j < string.length; j++) {
      counts[string[j]]++;
    }
    let key = 'P';
    if (counts.P >= counts.S && counts.P >= counts.R) {
      key = 'S';
    }
    if (counts.S >= counts.P && counts.S >= counts.R) {
      key = 'R';
    }
    return new Array(string.length).fill(key).join('');
  },
};
