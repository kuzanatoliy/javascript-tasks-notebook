module.exports = {
  getConfigurations: (a, b) => {
    let c1 = 0;
    let c2 = 0;
    let c3 = 0;
    for (let j = 1; j < 7; j++) {
      const d1 = Math.abs(j - a);
      const d2 = Math.abs(j - b);
      if (d1 < d2) {
        c1++;
        continue;
      }
      if (d1 === d2) {
        c2++;
        continue;
      }
      c3++;
    }
    return [c1, c2, c3];
  },
};
