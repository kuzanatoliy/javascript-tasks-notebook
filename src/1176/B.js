module.exports = {
  getMaxCount: (arr) => {
    let res = 0;
    let c1 = 0;
    let c2 = 0;
    for (let j = 0; j < arr.length; j++) {
      const d = arr[j] % 3;
      res += d === 0;
      c1 += d === 1;
      c2 += d === 2;
    }
    return c1 < c2
      ? res + c1 + Math.floor((c2 - c1) / 3)
      : res + c2 + Math.floor((c1 - c2) / 3);
  },
};
