module.exports = {
  isItPossibleToTransform: (str1, str2) => {
    if (str2.length > str1.length) {
      return 'NO';
    }
    for (let j = str1.length - 1, jj = str2.length - 1; jj > 0; j--, jj--) {
      if (str2[jj] !== str1[j]) {
        return 'NO';
      }
    }
    const d = str1.length - str2.length + 1;
    for (let jjj = 0; jjj < d; jjj++) {
      if (str1[jjj] === str2[0]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
