/* eslint-disable guard-for-in */
module.exports = {
  getCountOfOperations: (array1, array2) => {
    const m = {};
    const ma = array1.reduce((o, x) => {
      o[x] = (o[x] || 0) + 1;
      m[x] = 1;
      return o;
    }, {});
    const mb = array2.reduce((o, x) => {
      o[x] = (o[x] || 0) + 1;
      m[x] = 1;
      return o;
    }, {});
    const ca = Array(10).fill(0);
    const cb = Array(10).fill(0);
    let r = 0;
    for (let x in m) {
      const na = ma[x] || 0;
      const nb = mb[x] || 0;
      let add = 0;
      if (x > 9) {
        add = 1;
        x = String(x).length;
      }
      if (na > nb) {
        ca[x] += na - nb;
        r += add * (na - nb);
      } else {
        cb[x] += nb - na;
        r += add * (nb - na);
      }
    }
    for (let i = 2; i <= 9; i++) {
      r += Math.abs(ca[i] - cb[i]);
    }
    return r;
  },
};
