module.exports = {
  getMinAchivableStr: (str) => {
    for (let j = 1; j < str.length; j++) {
      if (str[j - 1] === str[j]) {
        return 1;
      }
    }
    return str.length;
  },
};
