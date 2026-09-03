module.exports = {
  getMinStrLength: (str) => {
    let l = 1;
    let d = 0;
    for (let j = 1; j < str.length - 1; j++) {
      l += str[j] !== str[j - 1];
      if (str[j] !== str[j - 1] && str[j + 1] !== str[j] && !d) {
        d = 1;
      }
      if (str[j] !== str[j - 1] && str[j + 1] === str[j - 1]) {
        d = 2;
      }
    }
    l += str[str.length - 1] !== str[str.length - 2];
    return l - d;
  },
};
