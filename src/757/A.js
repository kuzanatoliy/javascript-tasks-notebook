module.exports = {
  getCountOfWords: (str) => {
    let B = 0;
    let u = 0;
    let l = 0;
    let a = 0;
    let s = 0;
    let r = 0;
    let b = 0;
    for (let j = 0; j < str.length; j++) {
      B += str[j] === 'B';
      u += str[j] === 'u';
      l += str[j] === 'l';
      a += str[j] === 'a';
      s += str[j] === 's';
      r += str[j] === 'r';
      b += str[j] === 'b';
    }
    return Math.min(B, Math.floor(u / 2), l, Math.floor(a / 2), s, r, b);
  },
};
