module.exports = {
  getCountOfOperations: (arrA, arrB) => {
    let count = 0;
    let sumA = 0;
    let sumB = 0;
    for (let j = 0; j < arrA.length; j++) {
      sumA += arrA[j];
      sumB += arrB[j];
      count += Number(arrA[j] !== arrB[j]);
    }
    return Math.min(count, Math.abs(sumA - sumB) + 1);
  },
};
