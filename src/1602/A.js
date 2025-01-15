module.exports = {
  getStrs: (str) => {
    let [min] = str;
    for (let j = 1; j < str.length; j++) {
      if (min > str[j]) {
        min = str[j];
      }
    }
    return [min, str.replace(min, '')];
  },
};
