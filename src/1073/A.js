module.exports = {
  hasDiverseSubstr: (str) => {
    for (let j = 1; j < str.length; j++) {
      if (str[j - 1] !== str[j]) {
        return ['YES', `${str[j - 1]}${str[j]}`];
      }
    }
    return ['NO'];
  },
};
