module.exports = {
  getMinCost: (arrA, arrB) => {
    let n1 = 0;
    let n2 = 0;
    for (let j = 0; j < arrA.length; j++) {
      if (arrA[j] === 1 && arrB[j] === 0) {
        n1++;
        continue;
      }
      if (arrA[j] === 0 && arrB[j] === 1) {
        n2++;
      }
    }
    if (!n1) {
      return -1;
    }
    return Math.ceil((n2 + 1) / n1);
  },
};
