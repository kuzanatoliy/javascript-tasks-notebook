/* eslint-disable prefer-destructuring */
module.exports = {
  getCupIndex: (ind, p1, p2, p3) => {
    if (p1[0] === ind) {
      ind = p1[1];
    } else if (p1[1] === ind) {
      ind = p1[0];
    }
    if (p2[0] === ind) {
      ind = p2[1];
    } else if (p2[1] === ind) {
      ind = p2[0];
    }
    if (p3[0] === ind) {
      ind = p3[1];
    } else if (p3[1] === ind) {
      ind = p3[0];
    }
    return ind;
  },
};
