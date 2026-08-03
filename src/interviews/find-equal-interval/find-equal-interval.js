module.exports = {
  findEqualInterval: (arr, target) => {
    if (!arr.length) {
      return [];
    }
    let l = 0;
    let r = arr.length - 1;
    while (r - l > 1) {
      const d = Math.floor((r + l) / 2);
      if (arr[d] < target) {
        l = d;
      } else {
        r = d;
      }
    }
    if (arr[r] !== target) {
      return [];
    }
    const res = [r];
    l = r;
    r = arr.length - 1;
    while (r - l > 1) {
      const d = Math.floor((r + l) / 2);
      if (arr[d] > target) {
        r = d;
      } else {
        l = d;
      }
    }
    res.push(l);
    return res;
  },
};
