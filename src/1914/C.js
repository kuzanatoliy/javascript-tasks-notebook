module.exports = {
  getMaxScore: (k, arrA, arrB) => {
    let sum = 0;
    const vals = [];
    let max = 0;
    for (let j = 0; j < arrA.length && j < k; j++) {
      sum += arrA[j];
      if (max < arrB[j]) {
        max = arrB[j];
      }
      vals.push(sum + max * (k - j - 1));
    }
    return Math.max(...vals);
  },
};
