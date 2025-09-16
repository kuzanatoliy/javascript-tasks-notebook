module.exports = {
  getPermutation: (map, k) => {
    const res = new Array(map.length).fill(0);
    let fCurr = 1;
    let lCurr = map.length;
    let d = 0;
    for (let j = 0; j < map.length; j++) {
      if (map[j] === '1') {
        res[j] = fCurr;
        fCurr++;
        d++;
      } else {
        res[j] = lCurr;
        lCurr--;
        d = 0;
      }
      if (d === k) {
        return ['NO'];
      }
    }
    return ['YES', res];
  },
};
