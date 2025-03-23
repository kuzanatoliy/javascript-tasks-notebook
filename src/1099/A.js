/* eslint-disable max-params */
module.exports = {
  getFinalWeight: (w, h, u1, d1, u2, d2) => {
    const stones =
      d1 > d2
        ? [
            [d1, u1],
            [d2, u2],
          ]
        : [
            [d2, u2],
            [d1, u1],
          ];
    let ind = 0;
    while (h) {
      w += h;
      if (stones[ind] && stones[ind][0] === h) {
        w = Math.max(w - stones[ind][1], 0);
        ind++;
      }
      h--;
    }
    return w;
  },
};
