module.exports = {
  isItPossibleToTransform: (board) => {
    for (let j = 0; j < board.length; j++) {
      for (let jj = 1; jj < board[j].length; jj++) {
        if (board[j][jj] === board[j][jj - 1]) {
          return 'NO';
        }
      }
    }
    return 'YES';
  },
};
