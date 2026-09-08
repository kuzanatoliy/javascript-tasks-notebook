module.exports = {
  isExisted: (str) => {
    let ct1 = 0;
    let cm1 = 0;
    let ct2 = 0;
    let cm2 = 0;
    for (let j = 0, jj = str.length - 1; j < str.length; j++, jj--) {
      ct1 += str[j] === 'T';
      ct2 += str[jj] === 'T';
      cm1 += str[j] === 'M';
      cm2 += str[jj] === 'M';
      if (ct1 < cm1 || ct2 < cm2) {
        return 'NO';
      }
    }
    return ct1 / cm1 === 2 ? 'YES' : 'NO';
  },
};
