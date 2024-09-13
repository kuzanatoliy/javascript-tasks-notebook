module.exports = {
  itIsPossibleToChangeString: (str) => {
    let l = 1;
    let r = str.length - 2;
    while (l < r) {
      if (str[l - 1] !== str[l]) {
        return 'YES';
      }
      l++;
      r--;
    }
    return 'NO';
  },
};
