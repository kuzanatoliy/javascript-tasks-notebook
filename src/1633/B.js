module.exports = {
  getMaxAmountOfCharacters: (str) => {
    let a = 0;
    let b = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '1') {
        a++;
        continue;
      }
      b++;
    }
    return a === b ? a - 1 : Math.min(a, b);
  },
};
