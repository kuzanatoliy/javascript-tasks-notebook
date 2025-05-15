module.exports = {
  getCountOfOperations: (str1, str2) => {
    let d = 0;
    while (
      d < str1.length &&
      d < str2.length &&
      str1[str1.length - d - 1] === str2[str2.length - d - 1]
    ) {
      d++;
    }
    return str1.length + str2.length - 2 * d;
  },
};
