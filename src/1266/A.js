module.exports = {
  getWinner: (snum) => {
    const ans = snum.split('').map((item) => +item);
    const set = new Set(ans);
    const zc = ans.filter((item) => item === 0).length;
    const sum = ans.reduce((a, b) => a + b, 0);
    return sum % 3 === 0 &&
      (zc > 1 ||
        (set.has(0) && (set.has(2) || set.has(4) || set.has(6) || set.has(8))))
      ? 'red'
      : 'cyan';
  },
};
