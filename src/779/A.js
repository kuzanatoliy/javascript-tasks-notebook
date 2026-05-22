module.exports = {
  getCountOfReplacement: (arrA, arrB) => {
    const ca = [0, 0, 0, 0, 0, 0];
    const cb = [0, 0, 0, 0, 0, 0];
    const c = [0, 0, 0, 0, 0, 0];
    for (let j = 0; j < arrA.length; j++) {
      ca[arrA[j]]++;
      cb[arrB[j]]++;
      c[arrA[j]]++;
      c[arrB[j]]++;
    }
    const d = ca
      .map((item, ind) => Math.abs(item - cb[ind]))
      .reduce((a, b) => a + b, 0);
    return c.every((item) => item % 2 === 0) && d % 4 === 0 ? d / 4 : -1;
  },
};
