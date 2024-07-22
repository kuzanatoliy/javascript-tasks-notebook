module.exports = {
  getMinCountOfOperations: (string1, string2) => {
    let count = 0;
    while (string1.length <= 50) {
      if (string1.indexOf(string2) !== -1) {
        return count;
      }
      string1 += string1;
      count++;
    }
    return -1;
  },
};
