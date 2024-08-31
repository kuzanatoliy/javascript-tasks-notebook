module.exports = {
  getCountOfMoves: (origin) => {
    if (origin.includes('...')) {
      return 2;
    }
    let count = 0;
    for (let j = 0; j < origin.length; j++) {
      if (origin[j] === '.') {
        count++;
      }
    }
    return count;
  },
};
