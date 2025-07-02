module.exports = {
  getCountOfOperations: (str) => {
    let l = str.length - 1;
    while (l > 0 && str[l] === 'A') {
      l--;
    }
    let f = 0;
    while (f < l && str[f] === 'B') {
      f++;
    }
    return l - f;
  },
};
