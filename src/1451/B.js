module.exports = {
  isItPossibleToGetGoodSubsequence: (str, l, r) => {
    l--;
    r--;
    for (let j = l - 1; j >= 0; j--) {
      if (str[l] === str[j]) {
        return 'YES';
      }
    }
    for (let jj = r + 1; jj < str.length; jj++) {
      if (str[r] === str[jj]) {
        return 'YES';
      }
    }
    return 'NO';
  },
};
