module.exports = {
  getMaxPrefix: (str1, str2) => {
    let k = 0;
    let j = 0;
    while (k < str1.length && j < str2.length) {
      while (j < str2.length && str1[k] !== str2[j]) {
        j++;
      }
      if (str1[k] === str2[j]) {
        k++;
        j++;
      }
    }
    return k;
  },
};
