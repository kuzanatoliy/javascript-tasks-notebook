module.exports = {
  getCountOfMovedBrackets: (string) => {
    let c1 = 0;
    let c2 = 0;
    let count = 0;
    for (let j = 0; j < string.length; j++) {
      if (string[j] === ')') {
        c1--;
      } else {
        c1++;
      }
      if (c1 < 0 && c1 < c2) {
        count++;
      }
      c2 = Math.min(c1, c2);
    }
    return count;
  },
};
