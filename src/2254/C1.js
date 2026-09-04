module.exports = {
  isItPossibleToTransform: (strA, strB) => {
    let ca = 0;
    let cb = 0;
    for (let j = 0; j < strA.length; j += 2) {
      ca += strA[j] === '1';
      cb += strB[j] === '1';
    }
    if (ca !== cb) {
      return 'NO';
    }
    for (let jj = 1; jj < strA.length; jj += 2) {
      ca += strA[jj] === '1';
      cb += strB[jj] === '1';
    }
    return ca === cb ? 'YES' : 'NO';
  },
};
