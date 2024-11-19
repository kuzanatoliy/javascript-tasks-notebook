module.exports = {
  getColors: (str) => {
    let l = '(';
    if (str[0] === ')') {
      l = ')';
    }
    const ind1 = [];
    const ind2 = [];
    for (let jj = 0; jj < str.length; jj++) {
      if (str[jj] === l) {
        ind1.push(jj);
      } else {
        ind2.push(jj);
      }
    }
    if (ind1.length !== ind2.length) {
      return [-1];
    }
    let count = 1;
    let j = 0;
    const map = new Array(str.length).fill(2);
    for (let jjj = 0; jjj < ind2.length; jjj++) {
      if (ind1[j] < ind2[jjj]) {
        map[ind1[j]] = 1;
        map[ind2[jjj]] = 1;
        j++;
      } else {
        map[ind2[jjj]] = 2;
        count = 2;
      }
    }
    while (j < ind1.length) {
      map[ind1[j]] = 2;
      j++;
    }
    return [count, map];
  },
};
