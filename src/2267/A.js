module.exports = {
  getCost: (char, str) => {
    let l = 0;
    let r = str.length - 1;
    let count = 0;
    while (l < r) {
      if (str[l] !== str[r]) {
        count += (str[l] !== char) + (str[r] !== char);
      }
      l++;
      r--;
    }
    return count;
  },
};
