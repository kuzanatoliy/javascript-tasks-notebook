/* eslint-disable prefer-destructuring */
module.exports = {
  getTime: (s, pas) => {
    pas.sort((a, b) => b[0] - a[0]);
    let t = s - pas[0][0];
    let i = 0;
    for (i = 1; i < pas.length; i++) {
      if (t < pas[i - 1][1]) {
        t = pas[i - 1][1];
      }
      t += pas[i - 1][0] - pas[i][0];
    }
    if (t < pas[i - 1][1]) {
      t = pas[i - 1][1];
    }
    t += pas[i - 1][0];
    return t;
  },
};
