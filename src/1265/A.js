module.exports = {
  buildStr: (str) => {
    let res = '';
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '?') {
        switch (res[j - 1]) {
          case 'a':
            res += str[j + 1] === 'b' ? 'c' : 'b';
            break;
          case 'b':
            res += str[j + 1] === 'a' ? 'c' : 'a';
            break;
          default:
            res += str[j + 1] === 'b' ? 'a' : 'b';
        }
      } else if (str[j] === str[j + 1]) {
        return -1;
      } else {
        res += str[j];
      }
    }
    return res;
  },
};
