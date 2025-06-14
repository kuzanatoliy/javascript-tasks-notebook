/* eslint-disable consistent-return */
module.exports = {
  getSubstrings: (str) => {
    for (let j = 1; j < str.length - 1; j++) {
      for (let jj = j + 1; jj < str.length; jj++) {
        const a = str.slice(0, j);
        const b = str.slice(j, jj);
        const c = str.slice(jj);
        if ((a <= b && c <= b) || (a >= b && c >= b)) {
          return [a, b, c];
        }
      }
    }
  },
};
