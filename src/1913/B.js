module.exports = {
  getCost: (str) => {
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < str.length; j++) {
      c1 += str[j] === '0';
      c2 += str[j] === '1';
    }
    for (let jj = 0; jj < str.length; jj++) {
      if (str[jj] === '1') {
        if (c1 === 0) {
          return str.length - jj;
        }
        c1--;
      } else {
        if (c2 === 0) {
          return str.length - jj;
        }
        c2--;
      }
    }
    return 0;
  },
};
