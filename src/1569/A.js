module.exports = {
  getSubStr: (str) => {
    for (let j = 1; j < str.length; j++) {
      if (str[j] !== str[j - 1]) {
        return [j, j + 1];
      }
    }
    return [-1, -1];
  },
};
