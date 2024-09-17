module.exports = {
  isOriginalSquere: (str) => {
    const l = Math.floor(Math.sqrt(str.length));
    if (str.length / l !== l) {
      return 'NO';
    }
    for (let j = 0, jj = str.length - 1; j < l; j++, jj--) {
      if (str[j] !== '1' || str[jj] !== '1') {
        return 'NO';
      }
    }
    for (let k = 1; k < l - 1; k++) {
      const s = k * l;
      const f = s + l - 1;
      if (str[s] !== '1' || str[f] !== '1') {
        return 'NO';
      }
      for (let kk = s + 1; kk < f; kk++) {
        if (str[kk] !== '0') {
          return 'NO';
        }
      }
    }
    return 'YES';
  },
};
