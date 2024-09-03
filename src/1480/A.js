module.exports = {
  transformString: (str) => {
    const s = str.split('');
    for (let j = 0; j < s.length; j++) {
      if (j % 2 === 0) {
        if (s[j] === 'a') {
          s[j] = 'b';
        } else {
          s[j] = 'a';
        }
      } else if (s[j] === 'z') {
        s[j] = 'y';
      } else {
        s[j] = 'z';
      }
    }
    return s.join('');
  },
};
