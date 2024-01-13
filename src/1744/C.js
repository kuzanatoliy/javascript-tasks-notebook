module.exports = {
  getCountOfSecondsToCross: (colour, pattern) => {
    if (colour === 'g') {
      return 0;
    }
    pattern += pattern;
    const temp = [];
    for (let j = 0; j < pattern.length; j++) {
      if (pattern[j] === colour) {
        let c = 0;
        let jj = 0;
        for (jj = j; jj < pattern.length && pattern[jj] !== 'g'; jj++) {
          c++;
        }
        temp.push(c);
        j = jj;
      }
    }
    return Math.max(...temp);
  },
};
