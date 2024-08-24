module.exports = {
  getMinCountOfDays: (str) => {
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      count++;
      const temp = {};
      let l = 0;
      for (let jj = j; jj < str.length; jj++, j++) {
        if (!temp[str[jj]]) {
          l++;
        }
        if (l > 3) {
          j--;
          break;
        }
        temp[str[jj]] = true;
      }
    }
    return count;
  },
};
