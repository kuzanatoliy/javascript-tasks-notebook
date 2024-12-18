/* eslint-disable max-params */
module.exports = {
  getCountOfMoves: (rows, cols, rb, cb, rd, cd) =>
    Math.min(
      rb <= rd ? rd - rb : 2 * rows - rb - rd,
      cb <= cd ? cd - cb : 2 * cols - cb - cd
    ),
};
