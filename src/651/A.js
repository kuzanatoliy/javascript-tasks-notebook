module.exports = {
  getPairsCount: (a1, a2) => {
    let c = 0;
    while (a1 && a2 && (a1 > 1 || a2 > 1)) {
      if (a1 > a2) {
        a1 -= 2;
        a2++;
      } else {
        a1++;
        a2 -= 2;
      }
      c++;
    }
    return c;
  },
};
