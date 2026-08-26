module.exports = {
  getMinSum: (arr, l, r) => {
    const b = arr.slice(l - 1).sort((p, q) => p - q);
    let r1 = 0;
    for (let i = 0; i <= r - l; i += 1) {
      r1 += b[i];
    }
    const c = arr.slice(0, r).sort((p, q) => p - q);
    let r2 = 0;
    for (let i = 0; i <= r - l; i += 1) {
      r2 += c[i];
    }
    return Math.min(r1, r2);
  },
};
