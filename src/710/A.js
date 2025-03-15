module.exports = {
  getCountOfPossibleMoves: (position) => {
    if (position[0] === 'a' || position[0] === 'h') {
      if (position[1] === '1' || position[1] === '8') {
        return 3;
      }
    }
    if (
      position[0] === 'a' ||
      position[0] === 'h' ||
      position[1] === '1' ||
      position[1] === '8'
    ) {
      return 5;
    }
    return 8;
  },
};
