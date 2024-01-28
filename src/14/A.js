/* eslint-disable no-undefined */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
module.exports = {
  getRectangle: (strings) => {
    let m1;
    let m2;
    let n1;
    let n2;
    for (let i = 0; i < strings.length; i++) {
      for (let j = 0; j < strings[i].length; j++) {
        if (strings[i][j] === '*') {
          n1 = i;
          break;
        }
      }
      if (n1 !== undefined) {
        break;
      }
    }
    for (let i = strings.length - 1; i >= 0; i--) {
      for (let j = 0; j < strings[i].length; j++) {
        if (strings[i][j] === '*') {
          n2 = i;
          break;
        }
      }
      if (n2 !== undefined) {
        break;
      }
    }
    for (let i = 0; i < strings[0].length; i++) {
      for (let j = 0; j < strings.length; j++) {
        if (strings[j][i] === '*') {
          m1 = i;
          break;
        }
      }
      if (m1 !== undefined) {
        break;
      }
    }
    for (let i = strings[0].length - 1; i >= 0; i--) {
      for (let j = 0; j < strings.length; j++) {
        if (strings[j][i] === '*') {
          m2 = i;
          break;
        }
      }
      if (m2 !== undefined) {
        break;
      }
    }

    const res = [];

    for (let i = n1; i <= n2; i++) {
      res.push(strings[i].substr(m1, m2 - m1 + 1));
    }

    return res;
  },
};
