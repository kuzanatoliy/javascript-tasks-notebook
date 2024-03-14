module.exports = {
  getPosition: (a, b, c) => {
    const dif = Math.abs(a - b);
    const dif2 = 2 * dif;
    if (c > dif2 || a > dif2 || b > dif2) {
      return -1;
    }
    let temp = c - dif;
    if (temp <= 0) {
      temp = c + dif;
    }
    return temp;
  },
};
