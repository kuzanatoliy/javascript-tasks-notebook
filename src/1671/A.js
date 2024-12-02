module.exports = {
  isItPossibleToBuildString: (str) => {
    if (str[0] !== str[1] || str[str.length - 2] !== str[str.length - 1]) {
      return 'NO';
    }
    for (let j = 2; j < str.length; j++) {
      if (str[j - 2] !== str[j - 1] && str[j] !== str[j - 1]) {
        return 'NO';
      }
    }
    return 'YES';
  },
};
