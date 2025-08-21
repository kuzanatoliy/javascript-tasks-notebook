module.exports = {
  isItQuasiPalindromic: (str) => {
    let l = 0;
    while (str[l] === '0') {
      l++;
    }
    let r = str.length - 1;
    while (str[r] === '0') {
      r--;
    }
    const s = str.slice(l, r + 1);
    return s === s.split('').reverse().join('') ? 'YES' : 'NO';
  },
};
