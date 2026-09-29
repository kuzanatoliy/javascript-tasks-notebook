module.exports = {
  getBitConstruction: (num, k) => {
    if (num === 1) {
      return [k];
    }
    let last = 0;
    for (let i = 1; i < k; i++) {
      if (2 ** i - 1 <= k) {
        last = i;
      } else {
        break;
      }
    }
    const res = new Array(num).fill(0);
    res[0] = 2 ** last - 1;
    res[1] = k - 2 ** last + 1;
    return res;
  },
};
