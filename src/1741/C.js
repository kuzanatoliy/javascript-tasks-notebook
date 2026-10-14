module.exports = {
  getMinLength: (arr) => {
    let target = 0;
    let ml = arr.length;
    for (let j = 0; j < arr.length - 1; j++) {
      target += arr[j];
      let l = j + 1;
      let r = l;
      let cand = 0;
      const lens = [j + 1];
      while (l < arr.length && r < arr.length && cand < target) {
        if (cand < target) {
          cand += arr[r];
          r++;
        }
        if (cand === target) {
          cand = 0;
          lens.push(r - l);
          l = r;
        }
      }
      if (l === arr.length) {
        ml = Math.min(ml, Math.max(...lens));
      }
    }
    return ml;
  },
};
