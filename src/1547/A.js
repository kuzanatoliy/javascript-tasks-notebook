module.exports = {
  getCountOfMoves: (A, B, F) => {
    let count = Math.abs(A[0] - B[0]) + Math.abs(A[1] - B[1]);
    if (
      A[0] === F[0] &&
      B[0] === F[0] &&
      ((A[1] < F[1] && B[1] > F[1]) || (A[1] > F[1] && B[1] < F[1]))
    ) {
      count += 2;
    }
    if (
      A[1] === F[1] &&
      B[1] === F[1] &&
      ((A[0] < F[0] && B[0] > F[0]) || (A[0] > F[0] && B[0] < F[0]))
    ) {
      count += 2;
    }
    return count;
  },
};
