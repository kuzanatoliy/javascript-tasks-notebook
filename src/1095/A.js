module.exports = {
  getOriginalString: (string) => {
    let str = '';
    for (let d = 2, j = 0; j < string.length; j += d, d++) {
      str += string[j];
    }
    return str;
  },
};
