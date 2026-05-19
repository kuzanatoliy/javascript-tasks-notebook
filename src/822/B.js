module.exports = {
  getReplacementIndexes: (str1, str2) => {
    let temp = str2.split('');
    for (let j = 0; j < str2.length - str1.length + 1; j++) {
      const ans = [];
      for (let jj = 0; jj < str1.length; jj++) {
        if (str1[jj] !== str2[jj + j]) {
          ans.push(jj + 1);
        }
      }
      if (ans.length <= temp.length) {
        temp = ans;
      }
    }
    return temp;
  },
};
