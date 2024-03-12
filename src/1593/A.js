module.exports = {
  getDifs: (a, b, c) => {
    const res = [];
    let max = Math.max(b, c);
    res.push(a > max ? 0 : max - a + 1);
    max = Math.max(a, c);
    res.push(b > max ? 0 : max - b + 1);
    max = Math.max(a, b);
    res.push(c > max ? 0 : max - c + 1);
    return res;
  },
};
