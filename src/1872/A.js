module.exports = {
  getMinNumbersOfMoves: (glasses) =>
    Math.ceil(Math.abs(glasses[0] - glasses[1]) / 2 / glasses[2]),
};
