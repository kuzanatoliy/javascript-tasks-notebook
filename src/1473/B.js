/* eslint-disable no-constant-condition */
module.exports = {
  getOriginalString: (strA, strB) => {
    if (strA === strB) {
      return strA;
    }
    let a = 0;
    let b = 0;
    let temp = strA;
    while (true) {
      while (a < temp.length) {
        if (temp[a] !== strB[b]) {
          return -1;
        }
        a++;
        b = (b + 1) % strB.length;
      }
      if (temp.length % strB.length > 0) {
        temp += strA;
      } else {
        break;
      }
    }
    return temp;
  },
};
