module.exports = {
  getSubstr: (str) => {
    if (str.length === 1) {
      return -1;
    }

    for (let j = 1; j < str.length; j++) {
      if (str[j] === str[j - 1]) {
        return str[j] + str[j - 1];
      } else if (
        str[j] !== str[j - 1] &&
        j + 1 < str.length &&
        str[j - 1] !== str[j + 1] &&
        str[j] !== str[j + 1]
      ) {
        return str.substr(j - 1, 3);
      }
    }
    return -1;
  },
};
