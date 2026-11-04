module.exports = {
  getStringsCount: (str) => {
    let a1 = 0;
    let b1 = 0;

    for (let j = 2; j < str.length; j++) {
      a1 += str[j - 2] !== str[j - 1] && str[j - 2] === str[j];
      b1 += str[j - 2] === str[j - 1] && str[j - 2] === str[j];
    }

    return 1 + (a1 > 0) + (b1 > 0);
  },
};
