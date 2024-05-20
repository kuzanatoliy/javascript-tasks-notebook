module.exports = {
  getMinCountOfMoves: (s) => {
    let c = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '*') {
        c++;
      }
    }

    if (c === 0) {
      return 0;
    } else {
      let index;
      let c1 = 0;
      for (let i = 0; i < s.length; i++) {
        if (s[i] === '*') {
          c1++;
          // eslint-disable-next-line max-depth
          if (c1 === Math.floor(c / 2) + 1) {
            index = i;
            break;
          }
        }
      }
      let ans = 0;
      c1 = 0;
      for (let i = index - 1; i >= 0; i--) {
        if (s[i] === '*') {
          ans += index - i - 1 - c1;
          c1++;
        }
      }
      c1 = 0;
      for (let i = index + 1; i < s.length; i++) {
        if (s[i] === '*') {
          ans += i - index - 1 - c1;
          c1++;
        }
      }

      return ans;
    }
  },
};
