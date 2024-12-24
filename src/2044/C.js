module.exports = {
  getCountOfMonkey: (m, a, b, c) => {
    let d1 = m;
    let count = Math.min(a, d1);
    d1 -= count;
    let temp = Math.min(c, d1);
    c -= temp;
    count += temp;
    let d2 = m;
    temp = Math.min(b, d2);
    d2 -= temp;
    count += temp;
    count += Math.min(c, d2);
    return count;
  },
};
