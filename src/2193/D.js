module.exports = {
  getMaxScore: (arrA, arrB) => {
    let score = 0;
    arrA.sort((a, b) => b - a);
    for (
      let j = 0, jj = arrB[j];
      j < arrB.length && jj <= arrA.length;
      j++, jj += arrB[j]
    ) {
      score = Math.max(score, (j + 1) * arrA[jj - 1]);
    }
    return score;
  },
};
