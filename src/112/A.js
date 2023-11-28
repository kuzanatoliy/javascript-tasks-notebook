module.exports = {
  checkStringEquivalence: (str1, str2) => {
    const lstr1 = str1.toLowerCase();
    const lstr2 = str2.toLowerCase();
    if (lstr1 === lstr2) {
      return 0;
    } else if (lstr1 < lstr2) {
      return -1;
    } else {
      return 1;
    }
  },
};
