module.exports = {
  getMinCountOfOperations(str1, str2) {
    let c1 = 0;
    let c2 = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === '0' && str2[i] === '1') {
        c1++;
      }
      if (str1[i] === '1' && str2[i] === '0') {
        c2++;
      }
    }

    return Math.max(c1, c2);
  },
};
