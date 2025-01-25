module.exports = {
  getCountOfOperations: (arrA, arrB) => {
    const sum1 = arrA.reduce((a, b) => a + b, 0);
    const sum2 = arrB.reduce((a, b) => a + b, 0);
    if (sum1 !== sum2) {
      return [-1];
    }
    const m = [];
    const p = [];
    for (let j = 0; j < arrA.length; j++) {
      if (arrA[j] < arrB[j]) {
        m.push(j);
      } else if (arrA[j] > arrB[j]) {
        p.push(j);
      }
    }
    if (m.length === 0) {
      return [0];
    }
    let ind = 0;
    const res = [];
    for (let jj = 0; jj < m.length; jj++) {
      while (arrA[m[jj]] < arrB[m[jj]]) {
        arrA[m[jj]]++;
        arrA[p[ind]]--;
        res.push([p[ind] + 1, m[jj] + 1]);
        if (arrA[p[ind]] === arrB[p[ind]]) {
          ind++;
        }
      }
    }
    return [res.length, res];
  },
};
