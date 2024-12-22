module.exports = {
  getCountOfMoves: (str) => {
    let t1 = 0;
    let t2 = 0;
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[j] === '(') {
        t1++;
        continue;
      }
      if (str[j] === '[') {
        t2++;
        continue;
      }
      if (str[j] === ')' && t1) {
        t1--;
        c1++;
        continue;
      }
      if (str[j] === ']' && t2) {
        t2--;
        c2++;
        continue;
      }
    }
    return c1 + c2;
  },
};
