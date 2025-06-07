module.exports = {
  isSubstrExisted: (str, k) => {
    let i = 0;
    let j = str.length - 1;
    while (i < j && str[i] === str[j]) {
      i++;
      j--;
    }
    if (i > j) {
      i -= 1;
      j += 1;
    }
    return i >= k ? 'YES' : 'NO';
  },
};
