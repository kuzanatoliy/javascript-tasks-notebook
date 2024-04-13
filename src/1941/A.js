module.exports = {
  getWaysNumber: (price, arrayA, arrayB) => {
    let count = 0;
    for (let j = 0; j < arrayA.length; j++) {
      for (let jj = 0; jj < arrayB.length; jj++) {
        if (arrayA[j] + arrayB[jj] <= price) {
          count++;
        }
      }
    }
    return count;
  },
};
