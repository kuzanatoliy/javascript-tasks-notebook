module.exports = {
  getLengthOfSubstring: (string) => {
    let f = 0;
    while (f < string.length && string[f] !== 'B') {
      f++;
    }
    let l = string.length - 1;
    while (l >= 0 && string[l] !== 'B') {
      l--;
    }
    return l - f + 1;
  },
};
