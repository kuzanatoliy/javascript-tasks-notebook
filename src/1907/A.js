const columns = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const rows = ['1', '2', '3', '4', '5', '6', '7', '8'];

module.exports = {
  getPossibleMoves: (position) => {
    const res = [];
    for (let j = 0; j < columns.length; j++) {
      if (position[0] !== columns[j]) {
        res.push(`${columns[j]}${position[1]}`);
      }
    }
    for (let j = 0; j < rows.length; j++) {
      if (position[1] !== rows[j]) {
        res.push(`${position[0]}${rows[j]}`);
      }
    }
    return res;
  },
};
