/* eslint-disable max-depth */
module.exports = {
  getCombinations: (string) => {
    let d = 0;
    for (let c = 0; c < string.length; c++) {
      for (let j = c + 1; j < string.length; j++) {
        for (let l = j + 1; l < string.length; l++) {
          if (string[c] === 'Q' && string[j] === 'A' && string[l] === 'Q') {
            d++;
          }
        }
      }
    }
    return d;
  },
};
