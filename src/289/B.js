module.exports = {
  getCountOfMoves: (matrix, k) => {
    const arr = [];
    for (let j = 0; j < matrix.length; j++) {
      arr.push(...matrix[j]);
    }
    arr.sort((a, b) => a - b);
    const middle = arr[arr.length >> 1];
    const d = middle % k;
    let sum = 0;
    for (let j = 0; j < arr.length; j++) {
      if (d !== arr[j] % k) {
        return -1;
      }
      sum += Math.abs(middle - arr[j]);
    }
    return sum / k;
  },
};
