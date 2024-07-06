module.exports = {
  getRow: (string) => {
    let res = '';
    for (let j = 0; j < string.length; j++) {
      if (string[j] === 'U') {
        res += 'D';
        continue;
      }
      if (string[j] === 'D') {
        res += 'U';
        continue;
      }
      res += string[j];
    }
    return res;
  },
};
