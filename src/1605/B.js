module.exports = {
  getIndexes: (string) => {
    let f = 0;
    let l = string.length - 1;
    const resf = [];
    const resl = [];
    while (f < l) {
      while (string[f] === '0' && f < string.length) {
        f++;
      }
      while (string[l] === '1' && l >= 0) {
        l--;
      }
      if (f < l) {
        resf.push(f + 1);
        resl.push(l + 1);
        f++;
        l--;
      }
    }
    return [...resf, ...resl.reverse()];
  },
};
