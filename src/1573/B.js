module.exports = {
  getCountOfOperations: (arrA, arrB) => {
    const record = new Array(arrA.length + arrB.length + 1);
    for (let i = 0; i < arrA.length; i++) {
      record[arrA[i]] = i;
    }
    for (let i = 0; i < arrB.length; i++) {
      record[arrB[i]] = i;
    }

    let result = Infinity;
    let preMinA = Infinity;

    const end = arrA.length + arrB.length;

    for (let i = 1; i < end; i += 2) {
      preMinA = Math.min(preMinA, record[i]);
      result = Math.min(record[i + 1] + preMinA, result);
    }

    return result;
  },
};
