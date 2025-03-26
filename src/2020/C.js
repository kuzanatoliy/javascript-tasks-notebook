module.exports = {
  getA: (B, C, D) => {
    D -= B & ~C;
    const all = (1n << 62n) - 1n;
    const control = (B & C) | (~B & ~C & all);
    const flip = B & C & all;

    if (D >= 0n && (control & D) === D) {
      const v = D ^ flip;
      return v;
    } else {
      return -1n;
    }
  },
};
