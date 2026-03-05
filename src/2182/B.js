/* eslint-disable no-constant-condition */
module.exports = {
  getCountOfLayers: (a, b) => {
    let l1 = 0;
    let l2 = 0;
    let al1 = a;
    let al2 = b;
    let curr = 1;
    while (true) {
      if (l1 % 2) {
        if (al1 >= curr) {
          al1 -= curr;
          l1++;
        } else {
          break;
        }
      } else if (al2 >= curr) {
        al2 -= curr;
        l1++;
      } else {
        break;
      }
      curr *= 2;
    }
    al1 = a;
    al2 = b;
    curr = 1;
    while (true) {
      if (l2 % 2) {
        if (al2 >= curr) {
          al2 -= curr;
          l2++;
        } else {
          break;
        }
      } else if (al1 >= curr) {
        al1 -= curr;
        l2++;
      } else {
        break;
      }
      curr *= 2;
    }
    return Math.max(l1, l2);
  },
};
