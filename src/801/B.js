module.exports = {
  getOriginalString: (str, res) => {
    for (let j = 0; j < str.length; j++) {
      if (str[j] < res[j]) {
        return -1;
      }
    }
    return res;
  },
};
