module.exports = {
  getPrettyInt: (arrA, arrB) => {
    const a = new Array(10).fill(0);
    const b = new Array(10).fill(0);
    for (let j = 0; j < arrA.length; j++) {
      a[arrA[j]]++;
    }
    for (let jj = 0; jj < arrB.length; jj++) {
      b[arrB[jj]]++;
    }
    let ca = 0;
    let cb = 0;
    for (let jjj = 0; jjj < a.length && (!ca || !cb); jjj++) {
      if (a[jjj] === b[jjj] && a[jjj] > 0) {
        return jjj.toString();
      }
      if (a[jjj] && !ca) {
        ca = jjj.toString();
      }
      if (b[jjj] && !cb) {
        cb = jjj.toString();
      }
    }
    return ca < cb ? ca + cb : cb + ca;
  },
};
