module.exports = {
  getOriginalString: (str) => {
    let original = '1';
    for (let j = 1; j < str.length; j++) {
      original += +str[j] + 1 === +str[j - 1] + +original[j - 1] ? '0' : '1';
    }
    return original;
  },
};
