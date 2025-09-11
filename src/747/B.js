/* eslint-disable complexity */
module.exports = {
  reconstructString: (map) => {
    if (map.length % 4) {
      return '===';
    }
    const fls = { '?': 0, A: 0, C: 0, G: 0, T: 0 };
    for (let j = 0; j < map.length; j++) {
      fls[map[j]]++;
    }
    const d = map.length / 4;
    if (fls.A > d || fls.C > d || fls.G > d || fls.T > d) {
      return '===';
    }
    fls.A = d - fls.A;
    fls.C = d - fls.C;
    fls.G = d - fls.G;
    fls.T = d - fls.T;
    const res = [];
    let jj = 0;
    while (fls.A) {
      while (map[jj] !== '?') {
        res.push(map[jj]);
        jj++;
      }
      fls.A--;
      res.push('A');
      jj++;
    }
    while (fls.C) {
      while (map[jj] !== '?') {
        res.push(map[jj]);
        jj++;
      }
      fls.C--;
      res.push('C');
      jj++;
    }
    while (fls.G) {
      while (map[jj] !== '?') {
        res.push(map[jj]);
        jj++;
      }
      fls.G--;
      res.push('G');
      jj++;
    }
    while (fls.T) {
      while (map[jj] !== '?') {
        res.push(map[jj]);
        jj++;
      }
      fls.T--;
      res.push('T');
      jj++;
    }
    while (jj < map.length) {
      res.push(map[jj]);
      jj++;
    }
    return res.join('');
  },
};
