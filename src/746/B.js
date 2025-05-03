module.exports = {
  decodeStr: (str) => {
    let res = '';
    for (let j = 0; j < str.length; j++) {
      if ((str.length - j) % 2 === 1) {
        res += str[j];
      } else {
        res = str[j] + res;
      }
    }
    return res;
  },
};
