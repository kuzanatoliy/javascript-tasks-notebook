module.exports = {
  splitBySyllables: (str) => {
    if (str.length <= 3) {
      return str;
    }
    let res = '';
    res += str[0];
    res += str[1];
    for (let j = 2; j < str.length; j += 2) {
      if (j === str.length - 1) {
        res += str[j];
        break;
      }
      if (
        (str[j] === 'b' || str[j] === 'c' || str[j] === 'd') &&
        (str[j + 1] === 'b' || str[j + 1] === 'c' || str[j + 1] === 'd')
      ) {
        res += str[j];
        j++;
      }
      res += '.';
      res += str[j];
      res += str[j + 1];
    }
    return res;
  },
};
