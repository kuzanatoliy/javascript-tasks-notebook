module.exports = {
  getMaxPossibleSum: (countOfMoves, arrayA, arrayB) => {
    let sum = 0;
    let j;
    arrayA.sort((a, b) => a - b);
    arrayB.sort((a, b) => b - a);
    for (j = 0; j < countOfMoves && arrayA[j] - arrayB[j] < 0; j++) {
      sum += arrayB[j];
    }
    while (j < arrayA.length) {
      sum += arrayA[j];
      j++;
    }
    return sum;
  },
};
