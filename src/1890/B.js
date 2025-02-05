module.exports = {
  isItPossibleToTransform: (strS, strT) => {
    let fl = true;
    for (let j = 1; j < strT.length && fl; j++) {
      if (strT[j - 1] === strT[j]) {
        fl = false;
      }
    }
    for (let jj = 1; jj < strS.length; jj++) {
      if (strS[jj - 1] === strS[jj]) {
        if (
          fl &&
          strS[jj - 1] !== strT[0] &&
          strS[jj] !== strT[strT.length - 1]
        ) {
          continue;
        }
        return 'NO';
      }
    }
    return 'YES';
  },
};
