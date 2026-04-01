module.exports = {
  getCountOfSubstrs: (str) => {
    let count = 1;
    for (let j = 1; j < str.length; j++) {
      count += str[j - 1] !== str[j];
    }
    count += str[0] !== str[str.length - 1] && count < str.length;
    return count;
  },
};
