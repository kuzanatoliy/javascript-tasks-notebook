module.exports = {
  getCiclesCount: (x, k, map) => {
    let f = -1n;
    let c = -1n;
    let pf = x;
    let pc = 0n;
    for (let j = 0n; j < BigInt(map.length) && (f === -1n || c === -1n); j++) {
      if (map[j] === 'L') {
        pf--;
        pc--;
      } else {
        pf++;
        pc++;
      }
      if (pf === 0n && f === -1n) {
        f = j;
      }
      if (pc === 0n && c === -1n) {
        c = j;
      }
    }
    if (f === -1n || k < f + 1n) {
      return 0n;
    } else {
      k -= f + 1n;
    }
    return 1n + (c === -1n ? 0n : k / (c + 1n));
  },
};
