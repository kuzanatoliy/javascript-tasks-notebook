module.exports = {
  isItPossibleToCrack: (strA, strB) => {
    const d = strA.length / 2;
    const l = Math.ceil(d);
    const r = Math.floor(d);
    let lc = 0;
    let rc = 0;
    for (let j = 0; j < strA.length; j += 2) {
      lc += strA[j] === '0';
      rc += strB[j] === '0';
    }
    for (let jj = 1; jj < strA.length; jj += 2) {
      lc += strB[jj] === '0';
      rc += strA[jj] === '0';
    }
    return l <= lc && r <= rc ? 'YES' : 'NO';
  },
};
