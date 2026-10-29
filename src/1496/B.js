module.exports = {
  getUnicElementsCount: (k, arr) => {
    arr.sort((a, b) => a - b);
    const set = new Set(arr);
    let mex = 0;
    let pmex = -1;
    let temp = k;
    let max = arr[arr.length - 1];
    let pmax = -1;
    while (temp && mex < max) {
      while (set.has(mex)) {
        mex++;
      }
      const d = Math.ceil((max + mex) / 2);
      max = Math.max(max, d);
      set.add(d);
      if (pmex === mex && pmax === max) {
        temp = 0;
        break;
      } else {
        pmex = mex;
        pmax = max;
      }
      temp--;
    }
    return set.size + temp;
  },
};
