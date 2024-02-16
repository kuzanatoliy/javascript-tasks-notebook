module.exports = {
  getMinCountOfMoves: (arrayA, arrayB) => {
    const minA = Math.min(...arrayA);
    const minB = Math.min(...arrayB);
    let count = 0;
    for (let j = 0; j < arrayA.length; j++) {
      count += Math.max(arrayA[j] - minA, arrayB[j] - minB);
    }
    return count;
  },
};
