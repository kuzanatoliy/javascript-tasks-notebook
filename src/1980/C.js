module.exports = {
  isItPossibleToGetArrB: (arrA, arrB, arrD) => {
    const difs = [];
    if (arrB.indexOf(arrD[arrD.length - 1]) === -1) {
      return 'NO';
    }
    for (let j = 0; j < arrA.length; j++) {
      if (arrA[j] !== arrB[j]) {
        difs.push(arrB[j]);
      }
    }
    if (arrD.length < difs.length) {
      return 'NO';
    }
    difs.sort((a, b) => a - b);
    arrD.sort((a, b) => a - b);
    let k = 0;
    for (let jj = 0; k < difs.length && jj < arrD.length; jj++) {
      if (difs[k] === arrD[jj]) {
        k++;
      }
    }
    return k === difs.length ? 'YES' : 'NO';
  },
};
