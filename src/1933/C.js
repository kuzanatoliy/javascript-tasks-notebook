module.exports = {
  getOptionsCount: (a, b, l) => {
    const set = new Set();
    const va = [];
    let da = 0;
    let curr = 1;
    while (curr <= l) {
      va.push(curr);
      da++;
      curr = a ** da;
    }
    const vb = [];
    let db = 0;
    curr = 1;
    while (curr <= l) {
      vb.push(curr);
      db++;
      curr = b ** db;
    }
    for (let j = 0; j < va.length; j++) {
      for (let jj = 0; jj < vb.length; jj++) {
        const d = l / va[j] / vb[jj];
        if (Math.floor(d) === Math.ceil(d)) {
          set.add(d);
        }
      }
    }
    return set.size;
  },
};
