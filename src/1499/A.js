module.exports = {
  isItPossibleToPlace: (num, k1, k2, w, b) => {
    let cw = Math.min(k1, k2);
    cw += Math.floor((k1 + k2 - cw - cw) / 2);
    k1 = num - k1;
    k2 = num - k2;
    let cb = Math.min(k1, k2);
    cb += Math.floor((k1 + k2 - cb - cb) / 2);
    return cw >= w && cb >= b ? 'YES' : 'NO';
  },
};
