module.exports = {
  getCountOfMoves: (array) => {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (j + 1 === array[j]) {
        count++;
      }
    }
    return Math.ceil(count / 2);
  },
};
